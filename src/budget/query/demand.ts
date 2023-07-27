import { DemandService } from '../../demand/demand.service'
import { Budget, Demand } from '../../graphql'
import { Context } from '../../interfaces/context'

const demand = async (
  { demandId }: Budget,
  _: undefined,
  { db }: Context
): Promise<Demand | null> => {
  try {
    return await new DemandService(db).find(demandId)
  } catch (e) {
    console.log(`demand: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default demand
