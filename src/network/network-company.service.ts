import { PrismaClient } from '@prisma/client'
import {
  NetworkCompanyFilter,
  NetworkCompanyPayload,
  NetworkCompany,
  Pagination,
  CountRemove,
  Company,
} from '../graphql'
import { isNullOrUndefined } from '../utils/validation'

/**
 * Check if NetworkCompany exists
 */
const exists = async (
  db: PrismaClient,
  companyId: string,
  networkId: string
): Promise<boolean> =>
  !isNullOrUndefined(
    await db.networkCompany.findUnique({
      where: { networkId_companyId: { companyId, networkId } },
    })
  )
const removeByCompanyId = async (
  db: PrismaClient,
  companyId: string
): Promise<CountRemove> => {
  return await db.networkCompany.deleteMany({
    where: {
      companyId,
    },
  })
}

const findByCompanyAndNetwork = async (
  db: PrismaClient,
  companyId: string,
  networkId: string
): Promise<NetworkCompany> => {
  return await db.networkCompany.findUnique({
    where: { networkId_companyId: { companyId, networkId } },
  })
}

const findFirstByCompanyId = async (
  db: PrismaClient,
  companyId: string
): Promise<NetworkCompany> => {
  return await db.networkCompany.findFirst({
    where: {
      companyId,
    },
  })
}

const createNetworkCompany = async (
  db: PrismaClient,
  companyId: string,
  networkId: string,
  role: string
): Promise<NetworkCompany> => {
  return db.networkCompany.create({
    data: {
      company: {
        connect: {
          id: companyId,
        },
      },
      network: {
        connect: {
          id: networkId,
        },
      },
      status: 'UNDER_EVALUATION',
      role: role,
    },
  })
}

const updateStatus = async (
  db: PrismaClient,
  companyId: string,
  networkId: string,
  status: string
): Promise<NetworkCompany> => {
  return db.networkCompany.update({
    where: { networkId_companyId: { networkId, companyId } },
    data: {
      status,
    },
    include: {
      network: true,
      company: {
        include: { users: true },
      },
    },
  })
}

const findBuyersByNetwork = async (
  db: PrismaClient,
  networkId: string,
  pagination: Pagination,
  filter: NetworkCompanyFilter
): Promise<NetworkCompanyPayload> => {
  const networkCompanies = await db.networkCompany.findMany({
    skip: pagination.skip,
    take: pagination.take,
    where: {
      networkId,
      role: 'BUYER',
      status: 'VALID',
      company: {
        tradeName: {
          contains: filter?.companyName || '',
          mode: 'insensitive',
        },
      },
    },
  })

  const totalValues = await db.networkCompany.count({
    where: {
      networkId,
      role: 'BUYER',
      status: 'VALID',
    },
  })

  return {
    totalValues,
    payload: networkCompanies,
  }
}

const findSellersByNetwork = async (
  db: PrismaClient,
  networkId: string,
  pagination: Pagination,
  filter: NetworkCompanyFilter
): Promise<NetworkCompanyPayload> => {
  const networkCompanies = await db.networkCompany.findMany({
    skip: pagination.skip,
    take: pagination.take,
    where: {
      networkId,
      role: 'SELLER',
      status: 'VALID',
      company: {
        tradeName: {
          contains: filter?.companyName || '',
          mode: 'insensitive',
        },
      },
    },
  })

  const totalValues = await db.networkCompany.count({
    where: {
      networkId,
      role: 'SELLER',
      status: 'VALID',
    },
  })

  return {
    totalValues,
    payload: networkCompanies,
  }
}

const findByNetworkPagination = async (
  db: PrismaClient,
  networkId: string,
  { skip, take }: Pagination,
  filter: NetworkCompanyFilter
): Promise<NetworkCompanyPayload> => {
  const networkCompanies = await db.networkCompany.findMany({
    skip,
    take,
    where: {
      networkId,
      status: {
        contains: filter?.status || '',
      },
      company: {
        name: {
          contains: filter?.companyName || '',
          mode: 'insensitive',
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const totalValues = await db.networkCompany.count({
    where: {
      networkId,
      status: {
        contains: filter?.status || '',
      },
      company: {
        name: {
          contains: filter?.companyName || '',
          mode: 'default',
        },
      },
    },
  })

  return {
    totalValues,
    payload: networkCompanies,
  }
}

const companiesByNetwork = async (
  db: PrismaClient,
  networkId: string
): Promise<Array<Company>> => {
  const networkCompanies = await db.networkCompany.findMany({
    where: { networkId },
    include: {
      company: true,
    },
  })
  return networkCompanies.map((networkCompany) => networkCompany.company)
}

const getCompaniesIdByNetworkAndRole = async (
  db: PrismaClient,
  networkId: string,
  roleList: Array<string>
): Promise<Array<string>> => {
  const networkCompanies = await db.networkCompany.findMany({
    where: {
      networkId,
      role: {
        in: roleList,
      },
      status: 'VALID',
    },
    select: {
      companyId: true,
    },
  })
  return networkCompanies.map((networkCompany) => networkCompany.companyId)
}

export {
  exists,
  findByCompanyAndNetwork,
  createNetworkCompany,
  updateStatus,
  findByNetworkPagination,
  findSellersByNetwork,
  findBuyersByNetwork,
  findFirstByCompanyId,
  removeByCompanyId,
  companiesByNetwork,
  getCompaniesIdByNetworkAndRole,
}
