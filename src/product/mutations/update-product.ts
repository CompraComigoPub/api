import { Product, MutationUpdateProductArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { ProductService } from '../product.service'

const updateOrder = async (
  parent: undefined,
  { product }: MutationUpdateProductArgs,
  { db }: Context
): Promise<Product | null> => {
  try {
    return ProductService.update(db, product)
  } catch (e) {
    console.error(`updateProduct: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default updateOrder
