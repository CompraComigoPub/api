import { CategoryAttribute } from '@prisma/client'
import { MutationAppendAttributeToCategoryArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { categoryAttributeService } from '../category-attribute.service'

const appendAttributeToCategory = async (
  _: undefined,
  { categoryId, attributeId }: MutationAppendAttributeToCategoryArgs,
  { db }: Context
): Promise<CategoryAttribute> => {
  return await categoryAttributeService.create(db, { categoryId, attributeId })
}

export { appendAttributeToCategory }
