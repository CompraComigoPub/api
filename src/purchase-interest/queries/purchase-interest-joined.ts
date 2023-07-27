import { PurchaseInterestPayload } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'
import PurchaseInterestService from '../purchase-interest.service'

const purchaseInterestJoined = async (
  parent: undefined,
  args: undefined,
  { db, user, networkId }: Context
): Promise<PurchaseInterestPayload> => {
  try {
    const purchaseInterests = await new PurchaseInterestService(
      db,
      new OrderService(db)
    ).findJoinPurchaseInterest(user.companyId, networkId)

    return {
      purchaseInterests: purchaseInterests,
      count: purchaseInterests.length,
    }
  } catch (error) {
    console.log(`purchaseInterestJoined: ${error.message}`)
    throw new Error('Something went wrong')
  }
}

export default purchaseInterestJoined
