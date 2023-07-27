import { Budget, MutationReproveBudgetArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'
import PurchaseInterestService from '../../purchase-interest/purchase-interest.service'
import budgetService from '../budget.service'

const reproveBudget = async (
  _: undefined,
  { budgetId, status, description }: MutationReproveBudgetArgs,
  { db }: Context
): Promise<Budget> => {
  try {
    const notConsolidatedStatus = [
      'REPROVED_BY_SELLER',
      'REPROVED_BY_BUYER',
      'REPROVED_BY_OPERATOR',
    ]

    const budget = await budgetService.updateBudgetStatus(db, budgetId, status)
    await budgetService.updateBudget(db, budgetId, { description })

    const order = await new OrderService(db).find(budget.orderId)
    const budgetsByOrder = await budgetService.findByOrder(budget.orderId, db)
    const AllBudgetsReproved = budgetsByOrder.every((budget) =>
      notConsolidatedStatus.includes(budget.status)
    )

    if (AllBudgetsReproved) {
      await new PurchaseInterestService(db, new OrderService(db)).updateStatus(
        order.interestId,
        'OPEN'
      )
    }

    return budget
  } catch (err) {
    throw new Error(`Something went wrong: ${err.message}`)
  }
}

export default reproveBudget
