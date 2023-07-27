import { OrderItem, Address } from '../../graphql'
import { Context } from '../../interfaces/context'

const address = async (
  { addressId }: OrderItem,
  args: unknown,
  { db }: Context
): Promise<Address> => {
  return db.address.findUnique({ where: { id: addressId } })
}

export default address
