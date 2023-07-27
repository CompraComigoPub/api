import { Demand, MutationRemoveItemFromDemandArgs } from '../../graphql'
import { Context } from '../../interfaces/context'

const removeItemFromDemand = async (
  parent: undefined,
  args: MutationRemoveItemFromDemandArgs,
  context: Context
): Promise<Demand | null> => {
  try {
    const { db } = context
    const { item } = args

    const { demandId: id } = await db.demandItem.delete({
      where: { id: item.id },
      select: { demandId: true },
    })

    return { id }
  } catch (e) {
    console.debug(`removeItemFromDemand ${e.message}`)
    throw new Error(`Something went Wrong: ${e.message}`)
  }
}

export default removeItemFromDemand
