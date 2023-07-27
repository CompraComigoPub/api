import {
  PurchaseInterestPayload,
  QueryPurchaseInterestsClosedArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'
import PurchaseInterestService from '../purchase-interest.service'

const purchaseInterestsClosed = async (
  parent: undefined,
  { pagination, filter }: QueryPurchaseInterestsClosedArgs,
  { db, networkId }: Context
): Promise<PurchaseInterestPayload> => {
  try {
    return await new PurchaseInterestService(
      db,
      new OrderService(db)
    ).findPurchasesClosed(networkId, pagination, filter)
  } catch (error) {
    console.log(`purchaseInterestsByLeadershipId: ${error.message}`)
    throw new Error('Something went wrong')
  }
}

export default purchaseInterestsClosed
