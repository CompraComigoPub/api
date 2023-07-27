import { MutationUpdateBudgetArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import budgetService from '../budget.service'

const updateBudget = async (
  _: undefined,
  { budgetUpdate, budgetId }: MutationUpdateBudgetArgs,
  { db }: Context
) => {
  try {
    return await budgetService.updateBudget(db, budgetId, budgetUpdate)
  } catch (err) {
    console.debug('updateBudget:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

export default updateBudget
