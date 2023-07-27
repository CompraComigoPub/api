import { ValidationError } from 'apollo-server-errors'
import { Order, MutationCreateOrderArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import PurchaseInterestService from '../../purchase-interest/purchase-interest.service'
import OrderService from '../order.service'
import { getCompaniesIdByNetworkAndRole } from '../../network/network-company.service'
import activitiesService from '../../notifications/activities/activies.service'

const createOrder = async (
  parent: undefined,
  { order }: MutationCreateOrderArgs,
  { db, user, networkId }: Context
): Promise<Order | null> => {
  const purchaseInterest = await new PurchaseInterestService(
    db,
    new OrderService(db)
  ).find(order.interestId)
  if (new Date() > purchaseInterest.deadline)
    throw new ValidationError('Purchase expired')
  try {
    const result = await new OrderService(db).create(order, user, networkId)

    // send notification
    if (order.type === 'JOIN') {
      const operators = await getCompaniesIdByNetworkAndRole(db, networkId, [
        'OPERATOR',
      ])
      activitiesService.registerActivity(
        operators,
        'Nova solicitação adicionada',
        '/publicacoes/' + result.id + '/participacao-na-compra'
      )
    }

    return result
  } catch (e) {
    console.log(`createOrder: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default createOrder
