import { Company } from '../../graphql'
import { Context } from '../../interfaces/context'
import { findByCompanyAndNetwork } from '../../network/network-company.service'

const role = async (
  { id }: Company,
  _: undefined,
  { networkId, db }: Context
) => {
  try {
    const { role } = await findByCompanyAndNetwork(db, id, networkId)
    return role
  } catch (e) {
    console.log(`role: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default role
