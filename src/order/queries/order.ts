import { Order, QueryOrderArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../order.service'

const company = async (
  parent: undefined,
  { id }: QueryOrderArgs,
  { db }: Context
): Promise<Order | null> => {
  try {
    return new OrderService(db).find(id)
  } catch (e) {
    console.log(`company: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default company
