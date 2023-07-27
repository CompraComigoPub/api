import { Product, MutationCreateProductArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { ProductService } from '../product.service'

const createOrder = async (
  parent: undefined,
  { product }: MutationCreateProductArgs,
  { db }: Context
): Promise<Product | null> => {
  try {
    return ProductService.create(db, product)
  } catch (e) {
    console.error(`createProduct: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default createOrder
