import { AuthenticationError } from 'apollo-server'
import { Address } from '../../graphql'
import { Context } from '../../interfaces/context'
import AddressService from '../address.service'

const addressByCompany = async (
  parent: undefined,
  args: undefined,
  { db, user }: Context
): Promise<Array<Address> | null> => {
  return await AddressService.findByCompanyId(user.companyId, db)
}

export default addressByCompany
