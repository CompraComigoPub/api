import { PurchaseInterest, Order } from '../../graphql'
import { Context } from '../../interfaces/context'

import PurchaseInterestService from '../../purchase-interest/purchase-interest.service'
import OrderService from '../../order/order.service'

const purchaseInterest = async (
  { interestId }: Order,
  _: unknown,
  { db }: Context
): Promise<PurchaseInterest | null> => {
  try {
    if (interestId) {
      return new PurchaseInterestService(db, new OrderService(db)).find(
        interestId
      )
    }
  } catch (e) {
    console.log(`purchaseInterest: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default purchaseInterest
