import { MutationRemoveNetworkArgs, Network } from '../../graphql'
import { Context } from '../../interfaces/context'
import { exists, remove } from '../network-service'

const removeNetwork = async (
  _: undefined,
  args: MutationRemoveNetworkArgs,
  context: Context
): Promise<Network | null> => {
  try {
    const { db } = context
    const { id } = args

    if (!(await exists(db, id))) {
      throw new Error(
        `I searched for a registry with id ${id} but found nothing`
      )
    }

    const network = await remove(db, id)

    return network
  } catch (e) {
    throw new Error(e.message)
  }
}

export { removeNetwork }
