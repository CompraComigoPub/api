import { ForbiddenError } from 'apollo-server'
import { BudgetPagination, QueryBudgetsByBuyerArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import budgetService from '../budget.service'

const budgetsByBuyer = async (
  _: undefined,
  { pagination, filter }: QueryBudgetsByBuyerArgs,
  { roleCompany, networkId, user, db }: Context
): Promise<BudgetPagination> => {
  if (roleCompany !== 'BUYER') throw new ForbiddenError('Permission denied')
  try {
    return await budgetService.findByBuyerPagination(
      db,
      user.companyId,
      networkId,
      pagination,
      filter
    )
  } catch (err) {
    console.debug('budgetsByBuyer:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

export default budgetsByBuyer
