import { ProductsResponse, QueryProductsArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { ProductService } from '../product.service'

const products = async (
  parent: undefined,
  { pagination, filter }: QueryProductsArgs,
  { db }: Context
): Promise<ProductsResponse | null> => {
  try {
    const payload = await ProductService.findMany(db, pagination, filter)
    const total = await ProductService.count(db, filter)
    return {
      payload,
      total,
      perPage: payload.length,
    }
  } catch (e) {
    console.log(`products: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default products
