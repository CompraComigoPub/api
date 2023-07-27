import {
  MutationUpdatePurchaseInterestStatusArgs,
  PurchaseInterest,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'
import PurchaseInterestService from '../purchase-interest.service'

const updatePurchaseInterestStatus = async (
  _: undefined,
  { status, purchaseInterestId }: MutationUpdatePurchaseInterestStatusArgs,
  { db }: Context
): Promise<PurchaseInterest> => {
  try {
    return await new PurchaseInterestService(
      db,
      new OrderService(db)
    ).updateStatus(purchaseInterestId, status)
  } catch (err) {
    console.debug(`createPurchaseInterest: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default updatePurchaseInterestStatus
