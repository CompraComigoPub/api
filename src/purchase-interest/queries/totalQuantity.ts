import { PurchaseInterest } from '.prisma/client'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'
import PurchaseInterestService from '../purchase-interest.service'

const totalQuantity = async (
  { id }: PurchaseInterest,
  args: undefined,
  { db }: Context
) => {
  try {
    return await new PurchaseInterestService(
      db,
      new OrderService(db)
    ).getTotalQuantityByPurchase(id)
  } catch (err) {
    console.log(`totalQuantity: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default totalQuantity
