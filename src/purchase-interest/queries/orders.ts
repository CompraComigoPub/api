import { PurchaseInterest, Order, QueryOrderArgs } from '../../graphql'
import { Context } from '../../interfaces/context'

import OrderService from '../../order/order.service'

const orders = async (
  { id }: PurchaseInterest,
  _: QueryOrderArgs,
  { db }: Context
): Promise<Array<Order> | null> => {
  try {
    return new OrderService(db).findValidOrdersByInterestId(id)
  } catch (e) {
    console.log(`orders: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default orders
