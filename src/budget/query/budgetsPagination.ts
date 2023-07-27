import { BudgetPagination, QueryBudgetsPaginationArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import budgetService from '../budget.service'

const budgetsPagination = async (
  _: undefined,
  { pagination, filter }: QueryBudgetsPaginationArgs,
  { db, networkId }: Context
): Promise<BudgetPagination> => {
  try {
    return await budgetService.findPaginated(db, pagination, filter, networkId)
  } catch (err) {
    console.debug('budgetsPagination:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

export default budgetsPagination
