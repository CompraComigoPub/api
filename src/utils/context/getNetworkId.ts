import { PrismaClient } from '@prisma/client'
import { User } from '../../graphql'
import { findFirstByCompanyId } from '../../network/network-company.service'

const getNetworkId = async (
  user: User,
  db: PrismaClient
): Promise<string | null> => {
  try {
    if (!user) return null
    const networkCompany = await findFirstByCompanyId(db, user.companyId)
    return networkCompany?.networkId
  } catch (err) {
    console.debug('getNetwork', err.message)
    throw new Error('Something went Wrong')
  }
}
export default getNetworkId
