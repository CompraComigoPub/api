import { Attribute, MutationUpdateAttributeArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { AttributeService } from '../attribute.service'

const updateAttribute = async (
  _: undefined,
  { attribute, id }: MutationUpdateAttributeArgs,
  { db }: Context
): Promise<Attribute> => {
  try {
    return await AttributeService.update(db, attribute, id)
  } catch (e) {
    throw new Error(e.message)
  }
}

export { updateAttribute }
