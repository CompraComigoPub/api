import { ProductForm, ProductFormField } from '../../graphql'
import { Context } from '../../interfaces/context'
import ProductFormService from '../product-form.service'

const fields = async (
  { id }: ProductForm,
  _: undefined,
  { db }: Context
): Promise<Array<ProductFormField>> => {
  return await ProductFormService.getFieldsByFormId(db, id)
}

export default fields
