import {
  MutationAppendAttributeToProductArgs,
  ProductAttribute,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import { ProductAttributeService } from '../product-attribute.service'

const appendAttributeToProduct = async (
  _: undefined,
  args: MutationAppendAttributeToProductArgs,
  { db }: Context
): Promise<ProductAttribute> => {
  return await ProductAttributeService.create(db, args)
}

export { appendAttributeToProduct }
