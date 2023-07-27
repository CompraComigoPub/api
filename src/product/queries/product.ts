import { Product, QueryOrderArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { ProductService } from '../product.service'

const product = async (
  parent: undefined,
  { id }: QueryOrderArgs,
  { db }: Context
): Promise<Product | null> => {
  try {
    return ProductService.findUnique(db, id)
  } catch (e) {
    console.log(`product: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default product
