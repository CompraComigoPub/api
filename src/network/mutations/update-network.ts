import { MutationUpdateNetworkArgs, Network } from '../../graphql'
import { Context } from '../../interfaces/context'
import {
  RecordNotFoundError,
  UUIDError,
  ValidationError,
} from '../../utils/errors'
import { isUUID } from '../../utils/validation'
import { exists, update, validate } from '../network-service'

const updateNetwork = async (
  _: undefined,
  { id, network }: MutationUpdateNetworkArgs,
  { db }: Context
): Promise<Network> => {
  if (!isUUID(id)) {
    throw new UUIDError(id)
  }

  try {
    validate(network)
  } catch (e) {
    throw new ValidationError(e.message)
  }

  if (!(await exists(db, id))) {
    throw new RecordNotFoundError(id)
  }

  return update(db, network, id)
}

export { updateNetwork }
