import { Attribute, QueryAttributeArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { ValidationError } from '../../utils/errors'
import { isUUID } from '../../utils/validation'
import { AttributeService } from '../attribute.service'

const attribute = async (
  _: undefined,
  { id }: QueryAttributeArgs,
  { db }: Context
): Promise<Attribute> => {
  if (!isUUID(id)) {
    throw new ValidationError(id)
  }

  try {
    return await AttributeService.findUnique(db, id)
  } catch (e) {
    throw new Error('Error ' + e.message)
  }
}

export { attribute }
