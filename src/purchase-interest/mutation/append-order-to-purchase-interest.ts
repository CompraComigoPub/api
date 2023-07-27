import { Order, MutationAppendOrderToPurchaseInterestArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import PurchaseInterestService from '../purchase-interest.service'
import OrderService from '../../order/order.service'

const appendOrderToPurchaseInterest = async (
  parent: undefined,
  { orderId, purchaseInterestId }: MutationAppendOrderToPurchaseInterestArgs,
  { db }: Context
): Promise<Order | null> => {
  try {
    return new PurchaseInterestService(
      db,
      new OrderService(db)
    ).appendOrderToPurchaseInterest(orderId, purchaseInterestId)
  } catch (e) {
    console.debug(`appendOrderToPurchaseInterest: ${e.message}`)
    throw new Error('Something went Wrong')
  }
}

export default appendOrderToPurchaseInterest
