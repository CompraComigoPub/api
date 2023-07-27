import { PrismaClient } from '@prisma/client'
import {
  BudgetFilter,
  BudgetPagination,
  Pagination,
  UpdateBudgetInput,
  Budget,
} from '../graphql'
import { getPagination } from '../utils/db'

const findByBuyerPagination = async (
  db: PrismaClient,
  buyerId: string,
  networkId: string,
  pagination: Pagination,
  filter: BudgetFilter
): Promise<BudgetPagination> => {
  try {
    const budgets = await db.budget.findMany({
      ...getPagination(pagination),
      where: {
        NOT: {
          OR: [
            { status: 'READY_FOR_SELLER' },
            { status: 'REPROVED_BY_SELLER' },
            { status: 'READY_FOR_OPERATOR' },
          ],
        },
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
        order: {
          purchaseInterest: {
            title: {
              contains: filter?.title || '',
              mode: 'insensitive',
            },
          },
          companyId: buyerId,
          networkId,
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    const total = await db.budget.count({
      where: {
        NOT: {
          OR: [
            { status: 'READY_FOR_SELLER' },
            { status: 'REPROVED_BY_SELLER' },
            { status: 'READY_FOR_OPERATOR' },
          ],
        },
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
        demand: {
          networkId,
        },
        order: {
          purchaseInterest: {
            title: {
              contains: filter?.title || '',
              mode: 'insensitive',
            },
          },
          networkId,
          companyId: buyerId,
        },
      },
    })

    return { budgets, total }
  } catch (err) {
    console.debug('findByBuyerPagination:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

const findBySupplierPagination = async (
  db: PrismaClient,
  supplierId: string,
  networkId: string,
  pagination: Pagination,
  filter: BudgetFilter
): Promise<BudgetPagination> => {
  try {
    const budgets = await db.budget.findMany({
      ...getPagination(pagination),
      where: {
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
        demand: {
          supplierId,
          networkId,
        },
        order: {
          purchaseInterest: {
            title: {
              contains: filter?.title || '',
              mode: 'insensitive',
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })

    const total = await db.budget.count({
      where: {
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
        demand: {
          supplierId,
          networkId,
        },
        order: {
          purchaseInterest: {
            title: {
              contains: filter?.title || '',
              mode: 'insensitive',
            },
          },
        },
      },
    })

    return { budgets, total }
  } catch (err) {
    console.debug('findBudgetsBySupplierId:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

const updateBudgetStatus = (
  db: PrismaClient,
  budgetId: string,
  status: string
): Promise<Budget> => {
  try {
    return db.budget.update({
      where: {
        id: budgetId,
      },
      data: { status },
      include: {
        order: {
          include: {
            company: {
              include: { users: true },
            },
          },
        },
      },
    })
  } catch (err) {
    console.debug('findBudgetsBySupplierId:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

const updateBudget = async (
  db: PrismaClient,
  budgetId: string,
  budget: UpdateBudgetInput
): Promise<Budget> => {
  try {
    return await db.budget.update({
      where: {
        id: budgetId,
      },
      data: budget,
    })
  } catch (err) {
    console.debug('findBudgetsBySupplierId:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

const find = async (id: string, db: PrismaClient): Promise<Budget> => {
  try {
    return await db.budget.findUnique({
      where: { id },
      include: { demand: true, order: true },
    })
  } catch (err) {
    console.debug('findBudget:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

const findByOrder = async (
  orderId: string,
  db: PrismaClient
): Promise<Array<Budget>> => {
  try {
    return await db.budget.findMany({
      where: {
        orderId,
      },
    })
  } catch (err) {
    console.debug('findBudgetByOrder:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

const findPaginated = async (
  db: PrismaClient,
  pagination: Pagination,
  filter: BudgetFilter,
  networkId: string
): Promise<BudgetPagination> => {
  try {
    const budgets = await db.budget.findMany({
      ...getPagination(pagination),
      where: {
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
        order: {
          purchaseInterest: {
            title: {
              contains: filter?.title || '',
              mode: 'insensitive',
            },
          },
          networkId,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    const total = await db.budget.count({
      where: {
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
        order: {
          purchaseInterest: {
            title: {
              contains: filter?.title || '',
              mode: 'insensitive',
            },
          },
          networkId,
        },
      },
    })

    return {
      budgets,
      total,
    }
  } catch (err) {
    console.debug('findBudgetsPaginated:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

const budgetService = {
  findBySupplierPagination,
  updateBudgetStatus,
  updateBudget,
  findByBuyerPagination,
  find,
  findByOrder,
  findPaginated,
}

export default budgetService
