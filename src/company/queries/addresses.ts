import AddressService from '../../address/address.service'
import { Address, Company, Order } from '../../graphql'
import { Context } from '../../interfaces/context'
const addresses = async (
  { id }: Company,
  args: undefined,
  { db }: Context
): Promise<Array<Address> | null> => {
  try {
    return AddressService.findByCompanyId(id, db)
  } catch (e) {
    console.log(`addresses: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default addresses
