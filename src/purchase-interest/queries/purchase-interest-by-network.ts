import {
  PurchaseInterestPayload,
  QueryPurchaseInterestsByNetworkArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'
import PurchaseInterestService from '../purchase-interest.service'

const purchaseInterestsByNetwork = async (
  parent: undefined,
  { filter }: QueryPurchaseInterestsByNetworkArgs,
  { db, networkId }: Context
): Promise<PurchaseInterestPayload> => {
  try {
    const purchaseInterests = await new PurchaseInterestService(
      db,
      new OrderService(db)
    ).findByNetworkId(networkId, filter)

    return {
      purchaseInterests: purchaseInterests,
      count: purchaseInterests.length,
    }
  } catch (error) {
    console.log(`purchaseInterestsByNetworkId: ${error.message}`)
    throw new Error('Something went wrong')
  }
}

export default purchaseInterestsByNetwork
