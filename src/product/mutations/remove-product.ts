import { Product, MutationRemoveProductArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { ProductService } from '../product.service'

const updateOrder = async (
  parent: undefined,
  { id }: MutationRemoveProductArgs,
  { db }: Context
): Promise<Product | null> => {
  try {
    return ProductService.remove(db, id)
  } catch (e) {
    console.error(`removeProduct: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default updateOrder
