import appendItemToDemand from './mutations/append-item-to-demand'
import createDemand from './mutations/create-demand'
import removeItemFromDemand from './mutations/remove-item-from-demand'
import updateFinancialInfo from './mutations/update-financial-info'
// import createdBy from '../../demand/queries/created-by'
import demand from './queries/demand'
import demands from './queries/demands'
import items from './queries/items'
import supplier from './queries/supplier'
import totalPrice from './queries/totalPrice'
import { Resolvers } from '../graphql'
// import supplier from '../../supplier/queries/supplier'

const resolvers: Resolvers = {
  Mutation: {
    appendItemToDemand,
    createDemand,
    removeItemFromDemand,
    updateFinancialInfo,
  },
  Query: {
    demand,
    demands,
  },
  Demand: {
    supplier,
    items,
  },
  DemandItem: {
    totalPrice,
  },
}

export default resolvers
