import { CepAddress, QueryAddressByZipCodeArgs } from '../../graphql'
import AddressService from '../address.service'

const addressByZipCode = async (
  _: unknown,
  { zipcode }: QueryAddressByZipCodeArgs
): Promise<CepAddress | Record<string, never>> => {
  try {
    return await AddressService.getByZipCode(zipcode)
  } catch (e) {
    throw new Error(`Error: ${e.message}`)
  }
}
export default addressByZipCode
