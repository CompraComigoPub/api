import { Product, Category, QueryCategoryArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { categoryService } from '../../category/category.service'

const categories = async (
  { id }: Product,
  args: QueryCategoryArgs,
  { db }: Context
): Promise<Array<Category>> => {
  return await categoryService.findCategoriesByProduct(db, id)
}

export default categories
