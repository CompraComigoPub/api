import { QueryProductsByCategoriesArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { ProductService } from '../product.service'

const productsByCategories = async (
  args: undefined,
  { categoriesId, pagination, productName }: QueryProductsByCategoriesArgs,
  { db }: Context
) => {
  try {
    return await ProductService.getProductsByCategories(
      db,
      pagination,
      categoriesId,
      productName
    )
  } catch (err) {
    console.log(`productsByCategories: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default productsByCategories
