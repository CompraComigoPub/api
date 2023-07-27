import { Category, MutationRemoveCategoryArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { UUIDError } from '../../utils/errors'
import { isUUID } from '../../utils/validation'
import { categoryService } from '../category.service'

const removeCategory = async (
  _: undefined,
  { id }: MutationRemoveCategoryArgs,
  { db }: Context
): Promise<Category> => {
  if (!isUUID(id)) {
    throw new UUIDError(id)
  }

  return await categoryService.remove(db, id)
}

export { removeCategory }
