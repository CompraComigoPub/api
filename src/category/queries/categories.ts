import { categoryService } from '../category.service'
import { CategoryPayload, QueryCategoriesArgs } from '../../graphql'
import { Context } from '../../interfaces/context'

const categories = async (
  _: undefined,
  { pagination }: QueryCategoriesArgs,
  { db }: Context
): Promise<CategoryPayload> => {
  const categories = await categoryService.findMany(db, pagination)
  const count = 0

  return {
    count,
    categories,
  }
}

export { categories }
