import { NetworkPayload, QueryNetworksArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { count, search } from '../network-service'

const networks = async (
  _: undefined,
  { pagination }: QueryNetworksArgs,
  { db }: Context
): Promise<NetworkPayload> => {
  try {
    return {
      count: await count(db),
      networks: await search(db, pagination),
    }
  } catch (e) {
    console.log(e.message)
  }
}

export { networks }
