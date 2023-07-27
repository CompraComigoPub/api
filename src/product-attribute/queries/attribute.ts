import { ProductAttribute, Attribute, QueryAttributeArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { ValidationError } from '../../utils/errors'
import { isUUID } from '../../utils/validation'
import { AttributeService } from '../../attribute/attribute.service'

const attribute = async (
  { attributeId }: ProductAttribute,
  args: QueryAttributeArgs,
  { db }: Context
): Promise<Attribute> => {
  if (!isUUID(attributeId)) {
    throw new ValidationError(attributeId)
  }

  try {
    return await AttributeService.findUnique(db, attributeId)
  } catch (e) {
    throw new Error('Error ' + e.message)
  }
}

export default attribute
