import { Product, ProductAttribute, QueryOrderArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { ProductAttributeService } from '../../product-attribute/product-attribute.service'

const productAttributes = async (
  { id }: Product,
  args: QueryOrderArgs,
  { db }: Context
): Promise<Array<ProductAttribute> | null> => {
  try {
    return ProductAttributeService.findByProductId(db, id)
  } catch (e) {
    console.log(`attributes: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default productAttributes
