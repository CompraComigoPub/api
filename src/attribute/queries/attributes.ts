import { AttributePayload, QueryAttributesArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { AttributeService } from '../attribute.service'

const attributes = async (
  _: undefined,
  args: QueryAttributesArgs,
  { db }: Context
): Promise<AttributePayload> => {
  const attributes = await AttributeService.findMany(db)

  return {
    count: await AttributeService.count(db),
    attributes,
  }
}

export { attributes }
