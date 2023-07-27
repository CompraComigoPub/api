import { Order, QueryOrderArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../order.service'

const orders = async (
  parent: undefined,
  args: QueryOrderArgs,
  { db }: Context
): Promise<Array<Order> | null> => {
  try {
    return new OrderService(db).findAll()
  } catch (e) {
    console.log(`orders: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default orders
