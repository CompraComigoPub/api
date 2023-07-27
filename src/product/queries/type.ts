import { ProductFormField } from '@prisma/client'
import { Context } from '../../interfaces/context'
import ProductFormService from '../product-form.service'

const type = async (
  { typeId }: ProductFormField,
  _: undefined,
  { db }: Context
): Promise<string> => {
  const fieldType = await ProductFormService.getTypeById(db, typeId)
  return fieldType.name
}

export default type
