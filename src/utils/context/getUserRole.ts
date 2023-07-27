import { PrismaClient } from '@prisma/client'
import { User } from '../../graphql'
import { findByCompanyAndNetwork } from '../../network/network-company.service'

type NetworkCompanyInfo = {
  roleCompany: string
  status: string
}

const getUserRole = async (
  user: User,
  networkId: string,
  db: PrismaClient
): Promise<NetworkCompanyInfo> => {
  try {
    if (!user) return { roleCompany: null, status: null }
    const networkCompany = await findByCompanyAndNetwork(
      db,
      user.companyId,
      networkId
    )
    return { roleCompany: networkCompany?.role, status: networkCompany?.status }
  } catch (err) {
    console.debug('getUserRole', err.message)
    throw new Error('Something went Wrong')
  }
}
export default getUserRole
