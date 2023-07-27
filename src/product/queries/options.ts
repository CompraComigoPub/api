import { ProductFormField, ProductFormFieldOption } from '../../graphql'
import { Context } from '../../interfaces/context'
import ProductFormService from '../product-form.service'

const options = async (
  { id }: ProductFormField,
  _: undefined,
  { db }: Context
): Promise<Array<ProductFormFieldOption>> => {
  return await ProductFormService.getOptionsByFieldId(db, id)
}

export default options
