import { Budget, MutationRemoveBudgetArgs } from '../../graphql'
import { Context } from '../../interfaces/context'

const removeBudget = async (
  _: undefined,
  { id }: MutationRemoveBudgetArgs,
  { db }: Context
): Promise<Budget | null> => {
  try {
    return await db.budget.delete({ where: { id } })
  } catch (e) {
    throw new Error(`Something went wrong: ${e.message}`)
  }
}

export { removeBudget }
