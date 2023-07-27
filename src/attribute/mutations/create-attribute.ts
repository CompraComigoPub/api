import { Attribute, MutationCreateAttributeArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { AttributeService } from '../attribute.service'

const createAttribute = async (
  _: undefined,
  { attribute }: MutationCreateAttributeArgs,
  { db }: Context
): Promise<Attribute> => {
  try {
    return AttributeService.create(db, attribute)
  } catch (e) {
    throw new Error('Error ' + e.message)
  }
}

export { createAttribute }
