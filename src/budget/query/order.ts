import { Budget, Order } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'

const order = async (
  { orderId }: Budget,
  _: undefined,
  { db }: Context
): Promise<Order | null> => {
  try {
    return await new OrderService(db).find(orderId)
  } catch (e) {
    console.log(`order: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default order
