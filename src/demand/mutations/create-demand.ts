import { Demand, MutationCreateDemandArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { DemandService } from '../demand.service'
import { ForbiddenError } from 'apollo-server'

const createDemand = async (
  parent: undefined,
  { demand }: MutationCreateDemandArgs,
  { db, user, roleCompany, networkId }: Context
): Promise<Demand | null> => {
  if (roleCompany !== 'OPERATOR') throw new ForbiddenError('Permission denied')
  try {
    return await new DemandService(db).create(demand, user?.id, networkId)
  } catch (e) {
    console.debug('createDemand:: ', e.message)
    throw new Error(`Something went Wrong ${e.message}`)
  }
}

export default createDemand
