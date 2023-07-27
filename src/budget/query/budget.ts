import { ForbiddenError } from 'apollo-server-core'
import { Budget, QueryBudgetArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { isUUID } from '../../utils/validation'
import budgetService from '../budget.service'

const budget = async (
  _: undefined,
  { id }: QueryBudgetArgs,
  { db, user, roleCompany }: Context
): Promise<Budget | null> => {
  if (!isUUID(id)) {
    throw new Error(
      `I was expecting an UUID like ad638196-8b2c-442b-a63b-d623377c9ed1, but you gave me this: ${id}`
    )
  }

  const budget = await budgetService.find(id, db)
  if (
    user.companyId !== budget.order.companyId &&
    user.companyId !== budget.demand.supplierId &&
    roleCompany !== 'OPERATOR'
  ) {
    throw new ForbiddenError('Permission denied')
  }

  return budget
}

export { budget }
