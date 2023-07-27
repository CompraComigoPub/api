import { PaginationOrder, QueryOrdersJoinPendingArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../order.service'

const ordersJoinPending = async (
  args: undefined,
  { pagination, filter }: QueryOrdersJoinPendingArgs,
  { db, networkId }: Context
): Promise<PaginationOrder> => {
  try {
    return await new OrderService(db).findPendingJoinedOrders(
      networkId,
      pagination,
      filter
    )
  } catch (err) {
    console.log(`ordersJoinPending: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default ordersJoinPending
