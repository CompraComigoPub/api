import {
  MutationRemoveAttributeFromProductArgs,
  ProductAttribute,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import { ProductAttributeService } from '../product-attribute.service'

const removeAttributeFromProduct = async (
  _: undefined,
  args: MutationRemoveAttributeFromProductArgs,
  { db }: Context
): Promise<ProductAttribute> => {
  return await ProductAttributeService.remove(db, args)
}

export { removeAttributeFromProduct }
