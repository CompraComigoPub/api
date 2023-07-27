import { categoryService } from '../category.service'
import { Category, QueryCategoryArgs } from '../../graphql'
import { Context } from '../../interfaces/context'

const category = async (
  _: undefined,
  { id }: QueryCategoryArgs,
  { db }: Context
): Promise<Category> => {
  return await categoryService.findUnique(db, id)
}

export { category }
