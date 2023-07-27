import {
  Order,
  MutationRemoveOrderFromPurchaseInterestArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import PurchaseInterestService from '../purchase-interest.service'
import OrderService from '../../order/order.service'

const removeOrderFromPurchaseInterest = async (
  parent: undefined,
  { orderId }: MutationRemoveOrderFromPurchaseInterestArgs,
  { db }: Context
): Promise<Order | null> => {
  try {
    return new PurchaseInterestService(
      db,
      new OrderService(db)
    ).removeOrderFromPurchaseInterest(orderId)
  } catch (e) {
    console.debug(`removeOrderFromPurchaseInterest: ${e.message}`)
    throw new Error('Something went Wrong')
  }
}

export default removeOrderFromPurchaseInterest
