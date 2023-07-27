import { Demand } from '../../graphql'
import { Context } from '../../interfaces/context'

const demands = async (
  parent: undefined,
  args: undefined,
  context: Context
): Promise<Demand[] | null> => {
  try {
    const { db } = context

    const demands = await db.demand.findMany({ select: { id: true } })

    return demands
  } catch (e) {
    throw new Error(`Something went Wrong: ${e.message}`)
  }
}

export default demands
