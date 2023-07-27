import { Product, PurchaseInterest } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'

const product = async (
  { id, leadershipId }: PurchaseInterest,
  args: undefined,
  { db }: Context
): Promise<Product> => {
  try {
    const order = await new OrderService(db).findByInterestAndCompany(
      id,
      leadershipId,
      true
    )
    return order.items[0].product
  } catch (err) {
    console.log(`product: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default product
