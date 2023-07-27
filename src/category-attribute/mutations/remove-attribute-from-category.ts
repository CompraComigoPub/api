import {
  CategoryAttribute,
  MutationRemoveAttributeFromCategoryArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import { categoryAttributeService } from '../category-attribute.service'

const removeAttributeFromCategory = async (
  _: undefined,
  { attributeId, categoryId }: MutationRemoveAttributeFromCategoryArgs,
  { db }: Context
): Promise<CategoryAttribute> => {
  return categoryAttributeService.remove(db, { attributeId, categoryId })
}

export { removeAttributeFromCategory }
