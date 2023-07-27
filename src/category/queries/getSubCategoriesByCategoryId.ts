import { Category, QueryGetSubCategoriesByCategoryIdArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { categoryService } from '../category.service'

const getSubCategoriesByCategoryId = async (
  args: undefined,
  { categoryId }: QueryGetSubCategoriesByCategoryIdArgs,
  { db }: Context
): Promise<Array<Category>> => {
  try {
    return await categoryService.findSubCategoriesByCategoryId(db, categoryId)
  } catch (err) {
    console.debug(`getSubCategoriesByCategoryId: ${err.message}`)
    throw new Error('Something went Wrong')
  }
}

export default getSubCategoriesByCategoryId
