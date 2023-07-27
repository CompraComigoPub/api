import { ForbiddenError } from 'apollo-server'
import {
  NetworkCompanyPayload,
  QueryBuyerCompaniesByNetworkArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import { findBuyersByNetwork } from '../network-company.service'

const buyerCompaniesByNetwork = async (
  args: undefined,
  { pagination, filter }: QueryBuyerCompaniesByNetworkArgs,
  { networkId, db }: Context
): Promise<NetworkCompanyPayload> => {
  try {
    return await findBuyersByNetwork(db, networkId, pagination, filter)
  } catch (err) {
    console.debug(`buyerCompaniesByNetwork: ${err.message}`)
    throw new Error('Something went Wrong')
  }
}

export default buyerCompaniesByNetwork
