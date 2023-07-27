import { Resolvers } from '../graphql'
import createOrder from './mutations/create-order'
import items from './queries/items'
import order from './queries/order'
import orders from './queries/orders'
import product from './queries/product'
import company from './queries/company'
import purchaseInterest from './queries/purchase-interest'
import address from './queries/address'
import files from './queries/files'
import updateOrderStatus from './mutations/updateOrderStatus'
import ordersJoinPending from './queries/ordersJoinPending'
import leadershipOrdersPending from './queries/leadershipOrdersPending'
import additionalInfos from './queries/additionalInfos'
import additionalInfoForms from './queries/additionInfoForms'

const orderResolver: Resolvers = {
  Query: {
    order,
    orders,
    ordersJoinPending,
    leadershipOrdersPending,
  },
  Mutation: {
    createOrder,
    updateOrderStatus,
  },
  Order: {
    company,
    purchaseInterest,
    items,
    files,
  },
  OrderItem: {
    product,
    address,
    additionalInfoForms,
  },
}

export default orderResolver
