import { IResolvers } from 'graphql-tools'

import purchaseInterest from './queries/purchase-interest'
import leadership from './queries/leadership'
import purchaseInterestsByNetwork from './queries/purchase-interest-by-network'
import purchaseInterestJoined from './queries/purchase-interest-joined'
import purchaseInterestsCreated from './queries/purchase-interests-created'
import orders from './queries/orders'
import product from './queries/product'
import totalOrders from './queries/totalOrders'

import createPurchaseInterest from './mutation/create-purchase-interest'
import appendOrderToPurchaseInterest from './mutation/append-order-to-purchase-interest'
import removeOrderFromPurchaseInterest from './mutation/remove-order-from-purchase-interest'
import approvePurchaseInterest from './mutation/approve-purchaseInterest'
import purchaseInterestsClosed from './queries/purchase-interests-closed'
import creator from './queries/creator'
import operator from './queries/operator'
import updatePurchaseInterestStatus from './mutation/update-purchaseInterestStatus'
import notConsolidatedOrders from './queries/not-consolidatedOrders'
import totalQuantity from './queries/totalQuantity'
import category from './queries/category'
import openPurchasesByNetwork from './queries/open-purchases-by-network'
import closedPurchasesByNetwork from './queries/closed-purchases-by-network'

const purchaseInterestResolver: IResolvers = {
  Query: {
    purchaseInterest,
    purchaseInterestJoined,
    purchaseInterestsCreated,
    purchaseInterestsByNetwork,
    purchaseInterestsClosed,
    openPurchasesByNetwork,
    closedPurchasesByNetwork,
  },
  Mutation: {
    createPurchaseInterest,
    appendOrderToPurchaseInterest,
    removeOrderFromPurchaseInterest,
    approvePurchaseInterest,
    updatePurchaseInterestStatus,
  },
  PurchaseInterest: {
    leadership,
    orders,
    product,
    totalOrders,
    creator,
    operator,
    notConsolidatedOrders,
    totalQuantity,
    category,
  },
}

export default purchaseInterestResolver
