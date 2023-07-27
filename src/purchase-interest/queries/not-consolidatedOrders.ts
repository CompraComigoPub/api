import { PurchaseInterest } from '@prisma/client'
import budgetService from '../../budget/budget.service'
import { Budget, Order, QueryOrderArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'

const notConsolidatedOrders = async (
  { id }: PurchaseInterest,
  _: QueryOrderArgs,
  { db }: Context
): Promise<Array<Order> | null> => {
  try {
    const orders = await new OrderService(db).findValidOrdersByInterestId(id)
    const budgets: Array<Array<Budget> | null> = []
    const notConsolidatedStatus = [
      'REPROVED_BY_SELLER',
      'REPROVED_BY_BUYER',
      'REPROVED_BY_OPERATOR',
    ]

    for (const order of orders) {
      const budgetsByOrder = await budgetService.findByOrder(order.id, db)
      budgets.push(budgetsByOrder.length === 0 ? null : budgetsByOrder)
    }

    const notConsolidatedOrders = orders.filter((_, index) =>
      !budgets[index]
        ? true
        : budgets[index].every((budget) =>
            notConsolidatedStatus.includes(budget.status)
          )
    )

    return notConsolidatedOrders
  } catch (e) {
    console.log(`notConsolidatedOrders: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default notConsolidatedOrders
