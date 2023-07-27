import { ForbiddenError } from 'apollo-server'
import { BudgetPagination, QueryBudgetsBySupplierArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import budgetService from '../budget.service'

const budgetsBySupplier = async (
  _: undefined,
  { pagination, filter }: QueryBudgetsBySupplierArgs,
  { roleCompany, networkId, user, db }: Context
): Promise<BudgetPagination> => {
  if (roleCompany !== 'SELLER') throw new ForbiddenError('Permission denied')

  try {
    return await budgetService.findBySupplierPagination(
      db,
      user.companyId,
      networkId,
      pagination,
      filter
    )
  } catch (err) {
    console.debug('budgetsBySupplier:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

export default budgetsBySupplier
