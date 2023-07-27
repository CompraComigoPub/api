import { MutationCreateNetworkArgs, Network } from '../../graphql'
import { Context } from '../../interfaces/context'
import { CreateError, ValidationError } from '../../utils/errors'
import { create, validate } from '../network-service'

const createNetwork = async (
  _: undefined,
  { network: input }: MutationCreateNetworkArgs,
  { db }: Context
): Promise<Network | null> => {
  try {
    validate(input)
  } catch (e) {
    throw new ValidationError(e.message)
  }

  try {
    return await create(db, input)
  } catch (e) {
    throw new CreateError(e.message)
  }
}

export { createNetwork }
