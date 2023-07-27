import { PurchaseInterest } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'

const totalOrders = async (
  { id }: PurchaseInterest,
  _: undefined,
  { db }: Context
): Promise<number> => {
  try {
    const orders = await new OrderService(db).findValidOrdersByInterestId(id)
    return orders.length
  } catch (err) {
    console.log(`totalOrders: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default totalOrders
