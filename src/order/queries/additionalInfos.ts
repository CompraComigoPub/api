import { OrderItem } from '.prisma/client'
import { OrderItemAdditionalInfo } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../order.service'

const additionalInfos = async (
  { id }: OrderItem,
  _: undefined,
  { db }: Context
): Promise<Array<OrderItemAdditionalInfo>> => {
  try {
    return new OrderService(db).getAdditionalInfosByOrderItem(id)
  } catch (err) {
    console.log(`additionalInfos: ${err.message}}`)
    throw new Error('Something went wrong')
  }
}

export default additionalInfos
