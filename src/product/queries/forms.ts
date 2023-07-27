import { Product } from '@prisma/client'
import { ProductForm } from '../../graphql'
import { Context } from '../../interfaces/context'
import ProductFormService from '../product-form.service'

const forms = async (
  { id }: Product,
  _: undefined,
  { db }: Context
): Promise<Array<ProductForm>> => {
  return ProductFormService.getFormsByProductId(db, id)
}

export default forms
