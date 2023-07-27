import { PurchaseInterest, QueryPurchaseInterestArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import PurchaseInterestService from '../purchase-interest.service'
import OrderService from '../../order/order.service'
import { ForbiddenError } from 'apollo-server'

const purchaseInterest = async (
  parent: undefined,
  { id }: QueryPurchaseInterestArgs,
  { db, networkId }: Context
): Promise<PurchaseInterest | null> => {
  try {
    const purchaseInterest = await new PurchaseInterestService(
      db,
      new OrderService(db)
    ).find(id)
    if (purchaseInterest.networkId !== networkId)
      throw new ForbiddenError('Permission Denied')
    return purchaseInterest
  } catch (e) {
    console.log(`purchaseInterest: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default purchaseInterest
