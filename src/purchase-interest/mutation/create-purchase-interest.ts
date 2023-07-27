import {
  PurchaseInterest,
  MutationCreatePurchaseInterestArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import PurchaseInterestService from '../purchase-interest.service'
import OrderService from '../../order/order.service'
import activiesService from '../../notifications/activities/activies.service'
import { getCompaniesIdByNetworkAndRole } from '../../network/network-company.service'

const createPurchaseInterest = async (
  parent: undefined,
  { purchaseInterest }: MutationCreatePurchaseInterestArgs,
  { db, user, networkId }: Context
): Promise<PurchaseInterest | null> => {
  try {
    const result = await new PurchaseInterestService(
      db,
      new OrderService(db)
    ).create(purchaseInterest, user, networkId)

    // send notification
    const operators = await getCompaniesIdByNetworkAndRole(db, networkId, [
      'OPERATOR',
    ])
    activiesService.registerActivity(
      operators,
      'Nova empresa cadastrada',
      '/publicacoes/' + result.id + '/interesse-de-compra'
    )

    return result
  } catch (e) {
    console.debug(`createPurchaseInterest: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default createPurchaseInterest
