import { Category, MutationCreateCategoryArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { categoryService } from '../category.service'

const createCategory = async (
  _: undefined,
  { category }: MutationCreateCategoryArgs,
  { db }: Context
): Promise<Category> => {
  try {
    return await categoryService.create(db, category)
  } catch (e) {
    throw new Error(`Erro ${e.message}`)
  }
}

export { createCategory }
