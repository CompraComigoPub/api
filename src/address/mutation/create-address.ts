import { Address, MutationCreateAddressArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import AddressService from '../address.service'

const createAddress = async (
  parent: undefined,
  { address }: MutationCreateAddressArgs,
  { db }: Context
): Promise<Address> => {
  return await AddressService.createAddress(address, db)
}

export default createAddress
