import { Attribute, MutationRemoveAttributeArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { UUIDError } from '../../utils/errors'
import { isUUID } from '../../utils/validation'
import { AttributeService } from '../attribute.service'

const removeAttribute = async (
  _: undefined,
  { id }: MutationRemoveAttributeArgs,
  { db }: Context
): Promise<Attribute> => {
  try {
    !isUUID(id)
  } catch (e) {
    throw new UUIDError(id)
  }

  return AttributeService.remove(db, id)
}

export { removeAttribute }
