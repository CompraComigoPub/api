import { ForbiddenError } from 'apollo-server'
import {
  NetworkCompanyPayload,
  QueryAllCompaniesByNetworkArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import { findByNetworkPagination } from '../network-company.service'

const allCompaniesByNetwork = async (
  args: undefined,
  { pagination, filter }: QueryAllCompaniesByNetworkArgs,
  { networkId, db }: Context
): Promise<NetworkCompanyPayload> => {
  try {
    return await findByNetworkPagination(db, networkId, pagination, filter)
  } catch (err) {
    console.debug(`allCompaniesByNetwork: ${err.message}`)
    throw new Error('Something went Wrong')
  }
}

export default allCompaniesByNetwork
