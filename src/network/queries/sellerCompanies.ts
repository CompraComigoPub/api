import { NetworkCompanyPayload, QuerySellerCompaniesArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { findSellersByNetwork } from '../network-company.service'

const sellerCompanies = async (
  _: undefined,
  { pagination, filter }: QuerySellerCompaniesArgs,
  { db, networkId }: Context
): Promise<NetworkCompanyPayload> => {
  try {
    return await findSellersByNetwork(db, networkId, pagination, filter)
  } catch (err) {
    console.debug(`unapprovedCompanies: ${err.message}`)
    throw new Error('Something went Wrong')
  }
}

export default sellerCompanies
