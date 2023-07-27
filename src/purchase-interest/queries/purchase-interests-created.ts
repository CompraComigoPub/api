import { PurchaseInterestPayload } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'
import PurchaseInterestService from '../purchase-interest.service'

const purchaseInterestsCreated = async (
  parent: undefined,
  args: undefined,
  { db, user }: Context
): Promise<PurchaseInterestPayload> => {
  try {
    const purchaseInterests = await new PurchaseInterestService(
      db,
      new OrderService(db)
    ).findByLeadershipId(user.companyId)

    return {
      purchaseInterests: purchaseInterests,
      count: purchaseInterests.length,
    }
  } catch (error) {
    console.log(`purchaseInterestsByLeadershipId: ${error.message}`)
    throw new Error('Something went wrong')
  }
}

export default purchaseInterestsCreated
