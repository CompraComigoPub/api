import { Demand, QueryDemandArgs } from '../../graphql'
import { isUUID } from '../../utils/validation'
import { Context } from '../../interfaces/context'

const demand = async (
  parent: undefined,
  args: QueryDemandArgs,
  context: Context
): Promise<Demand | null> => {
  try {
    const { db } = context
    const { id } = args

    if (!isUUID(id)) {
      throw new Error(`Demand id must be a valid uuid: ${id}`)
    }

    const demand = await db.demand.findUnique({
      where: { id },
      select: { id: true },
    })

    return {
      id: demand.id,
    }
  } catch (e) {
    throw new Error(`Something went wrong ${e.message}`)
  }
}

export default demand
