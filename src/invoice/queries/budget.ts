import { Invoice } from '@prisma/client'
import { Context } from '../../interfaces/context'
import budgetService from '../../budget/budget.service'
import { Budget } from '../../graphql'

const budget = async (
  { budgetId }: Invoice,
  args: undefined,
  { db }: Context
): Promise<Budget> => {
  try {
    return await budgetService.find(budgetId, db)
  } catch (err) {
    console.debug('budget:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

export default budget
