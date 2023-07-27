import { Order, OrderItem } from '../../graphql'
import { Context } from '../../interfaces/context'

const items = async (
  { id }: Order,
  _: unknown,
  { db }: Context
): Promise<Array<OrderItem> | []> => {
  return await db.orderItem.findMany({
    where: {
      orderId: id,
    },
    orderBy: { productId: 'asc' },
  })
}

export default items
