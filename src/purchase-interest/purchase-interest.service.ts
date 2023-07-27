import { PrismaClient } from '@prisma/client'
import {
  CreatePurchaseInterestInput,
  Order,
  PurchaseInterest,
  Pagination,
  User,
  PurchaseInterestPayload,
  PurchaseInterestFilter,
} from '../graphql'
import OrderService from '../order/order.service'
import { isNull } from '../utils/validation'
import { getPagination } from '../utils/db'

class PurchaseInterestService {
  constructor(
    private readonly db: PrismaClient,
    private readonly orderService: OrderService
  ) {}

  async create(
    purchaseInterestInput: CreatePurchaseInterestInput,
    user: User,
    networkId: string
  ): Promise<PurchaseInterest | null> {
    try {
      const purchaseInterest = await this.db.purchaseInterest.create({
        data: {
          id: purchaseInterestInput.id,
          status: 'OPEN',
          title: purchaseInterestInput.title,
          description: purchaseInterestInput.description,
          deadline: new Date(purchaseInterestInput.deadline),
          approvedBy: null,
          networkId: networkId,
          photo: purchaseInterestInput.photo,
          category: {
            connect: {
              id: purchaseInterestInput.categoryId,
            },
          },
          leadership: {
            connect: {
              id: purchaseInterestInput.leadershipId,
            },
          },
          createdBy: user.id,
        },
      })

      return purchaseInterest
    } catch (e) {
      console.debug('PurchaseInterestService::create', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async appendOrderToPurchaseInterest(
    orderId: string,
    purchaseInterestId: string
  ): Promise<Order | null> {
    try {
      const order: Order = await this.orderService.find(orderId)
      const purchaseInterest: PurchaseInterest = await this.db.purchaseInterest.findUnique(
        {
          where: { id: purchaseInterestId },
        }
      )

      if (isNull(order)) {
        throw new Error(`Order ${orderId} not found`)
      }

      return this.orderService.setPurchaseInterest(
        order.id,
        purchaseInterest.id
      )
    } catch (e) {
      console.debug(
        'PurchaseInterest::appendOrderToPurchaseInterest ',
        e.message
      )
      throw new Error('Something went Wrong')
    }
  }

  async removeOrderFromPurchaseInterest(
    orderId: string
  ): Promise<Order | null> {
    try {
      const order: Order = await this.orderService.find(orderId)

      if (isNull(order)) {
        throw new Error(`Order ${orderId} not found`)
      }

      return this.orderService.unsetPurchaseInterest(order)
    } catch (e) {
      console.debug(
        'PurchaseInterestService::removeOrderFromPurchaseInterest ',
        e.message
      )
      throw new Error('Something went Wrong')
    }
  }

  async delete(id: string): Promise<PurchaseInterest | null> {
    try {
      return this.db.purchaseInterest.delete({ where: { id } })
    } catch (e) {
      console.debug('PurchaseInterestService::delete', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async find(id: string): Promise<PurchaseInterest | null> {
    try {
      return (
        id &&
        this.db.purchaseInterest.findUnique({
          where: { id },
        })
      )
    } catch (e) {
      console.debug('PurchaseInterestService::find', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async findAll(pagination?: Pagination): Promise<Array<PurchaseInterest>> {
    try {
      return this.db.purchaseInterest.findMany({
        ...getPagination(pagination),
      })
    } catch (e) {
      console.debug('PurchaseInterestService::findAll', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async findNotLeadership(
    id: string,
    companyId: string
  ): Promise<PurchaseInterest | null> {
    try {
      return await this.db.purchaseInterest.findFirst({
        where: { id, NOT: { leadershipId: companyId } },
      })
    } catch (e) {
      console.debug('PurchaseInterestService::findNotLeadership', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async findJoinPurchaseInterest(
    companyId: string,
    networkId: string
  ): Promise<Array<PurchaseInterest | null>> {
    try {
      const orders = await this.orderService.findValidJoinedOrders(
        companyId,
        networkId
      )

      const purchaseInterests = orders.map((o) => o.purchaseInterest)

      return purchaseInterests
    } catch (e) {
      console.debug('PurchaseInterestService::findByCompanyId', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async findByLeadershipId(
    leadershipId: string
  ): Promise<Array<PurchaseInterest> | null> {
    try {
      return this.db.purchaseInterest.findMany({
        where: { leadershipId: leadershipId, NOT: { approvedBy: null } },
        orderBy: { createdAt: 'desc' },
      })
    } catch (e) {
      console.debug('PurchaseInterestService::findByLeadershipId', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async findByNetworkId(
    networkId: string,
    filter: PurchaseInterestFilter
  ): Promise<Array<PurchaseInterest>> {
    try {
      return this.db.purchaseInterest.findMany({
        where: {
          networkId,
          NOT: { approvedBy: null },
          title: {
            contains: filter?.title || '',
            mode: 'insensitive',
          },
        },
        orderBy: { createdAt: 'desc' },
      })
    } catch (e) {
      console.debug('PurchaseInterestService::findByNetworkId', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async findOpenPurchasesByNetworkId(
    networkId: string,
    filter: PurchaseInterestFilter
  ): Promise<Array<PurchaseInterest>> {
    try {
      return this.db.purchaseInterest.findMany({
        where: {
          networkId,
          NOT: { approvedBy: null },
          title: {
            contains: filter?.title || '',
            mode: 'insensitive',
          },
          deadline: {
            gt: new Date(),
          },
        },
        orderBy: { createdAt: 'desc' },
      })
    } catch (e) {
      console.debug(
        'PurchaseInterestService::findOpenPurchaseByNetworkId',
        e.message
      )
      throw new Error('Something went Wrong')
    }
  }

  async findClosedPurchasesByNetworkId(
    networkId: string,
    filter: PurchaseInterestFilter
  ): Promise<Array<PurchaseInterest>> {
    try {
      return this.db.purchaseInterest.findMany({
        where: {
          networkId,
          NOT: { approvedBy: null },
          title: {
            contains: filter?.title || '',
            mode: 'insensitive',
          },
          deadline: {
            lt: new Date(),
          },
        },
        orderBy: { createdAt: 'desc' },
      })
    } catch (e) {
      console.debug(
        'PurchaseInterestService::findClosePurchaseByNetworkId',
        e.message
      )
      throw new Error('Something went Wrong')
    }
  }

  async approvePurchaseInterest(
    purchaseInterestId: string,
    userId: string
  ): Promise<PurchaseInterest> {
    try {
      return this.db.purchaseInterest.update({
        where: { id: purchaseInterestId },
        data: { approvedBy: userId },
        include: { leadership: { include: { users: true } } },
      })
    } catch (err) {
      console.debug(
        'PurchaseInterestService::approvePurchaseInterest ',
        err.message
      )
      throw new Error('Something was Wrong')
    }
  }

  async reprovePurchaseInterest(
    purchaseInterestId: string
  ): Promise<PurchaseInterest> {
    try {
      return this.db.purchaseInterest.update({
        where: { id: purchaseInterestId },
        data: { approvedBy: null },
      })
    } catch (err) {
      console.debug(
        'PurchaseInterestService::reprovePurchaseInterest ',
        err.message
      )
      throw new Error('Something was Wrong')
    }
  }

  async findPurchasesClosed(
    networkId: string,
    pagination: Pagination,
    filter: PurchaseInterestFilter
  ): Promise<PurchaseInterestPayload> {
    try {
      const purchaseInterests = await this.db.purchaseInterest.findMany({
        ...getPagination(pagination),
        where: {
          networkId,
          deadline: {
            lt: new Date(),
          },
          title: {
            contains: filter?.title || '',
            mode: 'insensitive',
          },
          status: {
            contains: filter?.status || '',
          },
          approvedBy: {
            not: null,
          },
        },
        orderBy: { createdAt: 'desc' },
      })

      const count = await this.db.purchaseInterest.count({
        where: {
          networkId,
          deadline: {
            lt: new Date(),
          },
          title: {
            contains: filter?.title || '',
            mode: 'insensitive',
          },
          status: {
            contains: filter?.status || '',
          },
          approvedBy: {
            not: null,
          },
        },
      })

      return { purchaseInterests, count }
    } catch (err) {
      console.debug('PurchaseInterestService::findPurchaseClosed ', err.message)
      throw new Error('Something was Wrong')
    }
  }

  async updateStatus(id: string, status: string): Promise<PurchaseInterest> {
    try {
      return await this.db.purchaseInterest.update({
        where: {
          id,
        },
        data: {
          status,
        },
      })
    } catch (err) {
      console.debug('PurchaseInterestService::updateStatus ', err.message)
      throw new Error('Something was Wrong')
    }
  }

  async getTotalQuantityByPurchase(purchaseId: string): Promise<number> {
    const orders = await this.orderService.findValidOrdersByInterestId(
      purchaseId
    )
    let totalQuantity = 0

    for (const order of orders) {
      const qtt = await this.orderService.getQuantityByOrder(order.id)
      totalQuantity = totalQuantity + qtt
    }

    return totalQuantity
  }
}

export default PurchaseInterestService
