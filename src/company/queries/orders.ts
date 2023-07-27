import { Company, Order } from '../../graphql'
import { Context } from '../../interfaces/context'

import OrderService from '../../order/order.service'

const orders = async (
  { id }: Company,
  args: undefined,
  { db }: Context
): Promise<Array<Order> | null> => {
  try {
    return new OrderService(db).findByCompany(id)
  } catch (e) {
    console.log(`orders: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default orders
