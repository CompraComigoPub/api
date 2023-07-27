import { ForbiddenError } from 'apollo-server-core'
import { ProductsInfo, QueryProductsInfoByPurchaseArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../../order/order.service'
import PurchaseInterestService from '../../purchase-interest/purchase-interest.service'

const productsInfoByPurchase = async (
  parent: undefined,
  { interestId }: QueryProductsInfoByPurchaseArgs,
  { db, networkId }: Context
): Promise<ProductsInfo> => {
  try {
    const orderService = new OrderService(db)
    const purchase = await new PurchaseInterestService(db, orderService).find(
      interestId
    )
    if (purchase.networkId !== networkId)
      throw new ForbiddenError('Permission Denied')
    const leadershipOrder = await orderService.findByInterestAndCompany(
      interestId,
      purchase.leadershipId,
      true
    )
    return {
      products: leadershipOrder.items.map((item) => item.product),
      categoryId: purchase.categoryId,
    }
  } catch (e) {
    console.log(`products: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default productsInfoByPurchase
