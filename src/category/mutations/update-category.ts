import { categoryService } from '../../category/category.service'
import { Category, MutationUpdateCategoryArgs } from '../../graphql'
import { Context } from '../../interfaces/context'

const updateCategory = async (
  _: undefined,
  { category, id }: MutationUpdateCategoryArgs,
  { db }: Context
): Promise<Category> => {
  return await categoryService.update(db, category, id)
}

export { updateCategory }
