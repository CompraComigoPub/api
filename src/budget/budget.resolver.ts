import { createBudget, removeBudget, reproveBudget } from './mutation'
import updateBudget from './mutation/update-budget'
import updateBudgetStatus from './mutation/update-budgetStatus'
import {
  budget,
  budgetsByBuyer,
  budgetsBySupplier,
  demand,
  order,
} from './query'
import budgetsPagination from './query/budgetsPagination'
import statusText from './query/statusText'
import { Resolvers } from '../graphql'

const budgetResolver: Resolvers = {
  Mutation: {
    createBudget,
    removeBudget,
    updateBudgetStatus,
    updateBudget,
    reproveBudget,
  },
  Query: {
    budget,
    budgetsBySupplier,
    budgetsByBuyer,
    budgetsPagination,
  },
  Budget: {
    demand,
    order,
    statusText,
  },
}

export default budgetResolver
