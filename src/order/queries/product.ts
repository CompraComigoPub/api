import { OrderItem, Product } from '../../graphql'
import { Context } from '../../interfaces/context'

const product = async (
  { id }: OrderItem,
  args: unknown,
  { db }: Context
): Promise<Product> => {
  const orderItem = await db.orderItem.findUnique({
    where: { id },
    include: { product: true },
  })

  return orderItem.product
}

export default product
