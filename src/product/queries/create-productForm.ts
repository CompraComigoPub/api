import { MutationCreateProductFormArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import productFormService from '../product-form.service'

const createProductForm = (
  parent: undefined,
  { formInput }: MutationCreateProductFormArgs,
  { db }: Context
) => {
  try {
    return productFormService.createForm(db, formInput)
  } catch (e) {
    console.error('createProductForm', e.message)
    throw new Error(e)
  }
}

export default createProductForm
