import { Network, QueryNetworkArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { RecordNotFoundError, UUIDError } from '../../utils/errors'
import { isUUID } from '../../utils/validation'
import { findUnique } from '../network-service'

const network = async (
  _: undefined,
  { id }: QueryNetworkArgs,
  { db }: Context
): Promise<Network> => {
  if (!isUUID(id)) {
    throw new UUIDError(id)
  }

  try {
    return findUnique(db, id)
  } catch (e) {
    throw new RecordNotFoundError(e.message)
  }
}

export { network }
