import { AuthenticationError } from 'apollo-server'
import {
  PaginationOrder,
  QueryLeadershipOrdersPendingArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../order.service'

const leadershipOrdersPending = async (
  args: undefined,
  { pagination, filter }: QueryLeadershipOrdersPendingArgs,
  { db, networkId }: Context
): Promise<PaginationOrder> => {
  try {
    return await new OrderService(db).findLeardershipOrders(
      networkId,
      pagination,
      filter
    )
  } catch (err) {
    console.log(`ordersJoinPending: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default leadershipOrdersPending
