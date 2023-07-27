import { OrderItem, PrismaClient } from '@prisma/client'
import {
  CreateOrderInput,
  FilterOrder,
  Order,
  OrderItemInput,
  Pagination,
  PaginationOrder,
  OrderItemAdditionalInfo,
  User,
} from '../graphql'
import { createOrderFile } from '../order-file/order-file.service'
import { getPagination } from '../utils/db'

class OrderService {
  constructor(private readonly db: PrismaClient) {}

  async create(
    orderInput: CreateOrderInput,
    user: User,
    networkId: string
  ): Promise<Order | null> {
    try {
      const order = await this.db.order.create({
        data: {
          company: {
            connect: {
              id: user.companyId ? user.companyId : null,
            },
          },
          status: 'UNDER_EVALUATION',
          type: orderInput.type,
          createdBy: user.id,
          network: {
            connect: { id: networkId },
          },
          purchaseInterest: {
            connect: { id: orderInput.interestId },
          },
        },
      })

      orderInput.items.forEach(async (item) => {
        await this.createOrderItem(item, order.id)
      })

      orderInput.fileIds?.forEach(async (fileId: string) => {
        createOrderFile(fileId, order.id, this.db)
      })

      return order
    } catch (e) {
      console.log('OrderService::create: ', e.message)
      throw new Error('Something went wrong')
    }
  }

  async findAll(): Promise<Array<Order> | null> {
    return this.db.order.findMany()
  }

  async find(id: string): Promise<Order | null> {
    return this.db.order.findUnique({
      where: {
        id,
      },
    })
  }

  async findByCompany(companyId: string): Promise<Array<Order> | null> {
    return this.db.order.findMany({
      where: {
        companyId,
      },
    })
  }

  async updateOrderStatus(
    orderId: string,
    userId: string,
    status: string
  ): Promise<Order> {
    try {
      return this.db.order.update({
        where: { id: orderId },
        data: { status, updatedBy: userId },
        include: {
          company: {
            include: { users: true },
          },
          purchaseInterest: true,
          items: {
            include: {
              product: true,
            },
          },
        },
      })
    } catch (err) {
      console.debug('OrderService::updateOrderStatus ', err.message)
      throw new Error('Something was Wrong')
    }
  }

  async findValidJoinedOrders(
    companyId: string,
    networkId: string
  ): Promise<Array<Order> | null> {
    return this.db.order.findMany({
      include: {
        purchaseInterest: true,
      },
      where: {
        companyId,
        networkId,
        status: 'VALID',
        purchaseInterest: {
          isNot: {
            leadershipId: companyId,
          },
        },
        NOT: {
          interestId: null,
        },
      },

      orderBy: { createdAt: 'desc' },
    })
  }

  async findPendingJoinedOrders(
    networkId: string,
    pagination: Pagination,
    filter: FilterOrder
  ): Promise<PaginationOrder> {
    try {
      const orders = await this.db.order.findMany({
        ...getPagination(pagination),
        where: {
          networkId,
          type: 'JOIN',
          status: {
            contains: filter?.status || '',
          },
          NOT: {
            interestId: null,
          },
          purchaseInterest: {
            title: {
              contains: filter?.title || '',
              mode: 'insensitive',
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      })

      const total = await this.db.order.count({
        where: {
          networkId,
          type: 'JOIN',
          status: {
            contains: filter?.status || '',
          },
          NOT: {
            interestId: null,
          },
          purchaseInterest: {
            title: {
              contains: filter?.title || '',
              mode: 'insensitive',
            },
          },
        },
      })

      return {
        orders,
        total,
      }
    } catch (e) {
      console.debug('OrderService::findOrdersJoinPending ', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async findLeardershipOrders(
    networkId: string,
    pagination: Pagination,
    filter: FilterOrder
  ): Promise<PaginationOrder> {
    try {
      const orders = await this.db.order.findMany({
        ...getPagination(pagination),
        where: {
          networkId,
          type: 'CREATE',
          status: {
            contains: filter?.status || '',
          },
          NOT: {
            purchaseInterest: null,
          },
          purchaseInterest: {
            title: {
              contains: filter?.title || '',
              mode: 'insensitive',
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      })

      const total = await this.db.order.count({
        where: {
          networkId,
          type: 'CREATE',
          status: {
            contains: filter?.status || '',
          },
          NOT: {
            purchaseInterest: null,
          },
          purchaseInterest: {
            title: {
              contains: filter?.title || '',
              mode: 'insensitive',
            },
          },
        },
      })

      return { orders, total }
    } catch (e) {
      console.debug('OrderService::findOrdersJoinPending ', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async findValidOrdersByInterestId(
    interestId: string
  ): Promise<Array<Order> | null> {
    return this.db.order.findMany({
      where: {
        interestId,
        status: 'VALID',
        NOT: {
          interestId: null,
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  async findByInterestAndCompany(
    interestId: string,
    companyId: string,
    includeItems: boolean
  ): Promise<Order | null> {
    return this.db.order.findFirst({
      where: {
        interestId,
        companyId,
      },
      include: {
        items: {
          include: includeItems ? { product: includeItems } : false,
        },
      },
      orderBy: { createdAt: 'asc' },
    })
  }

  async setPurchaseInterest(
    orderId: string,
    purchaseInterestId: string
  ): Promise<Order> {
    try {
      return this.db.order.update({
        where: { id: orderId },
        data: {
          purchaseInterest: {
            connect: {
              id: purchaseInterestId,
            },
          },
        },
      })
    } catch (e) {
      console.debug('OrderService::setPurchaseInterest ', e.message)
      throw new Error('Something was Wrong')
    }
  }

  async unsetPurchaseInterest(order: Order): Promise<Order> {
    try {
      return this.db.order.update({
        where: { id: order.id },
        data: {
          purchaseInterest: {
            connect: {
              id: null,
            },
          },
        },
      })
    } catch (e) {
      console.debug('OrderService::unsetPurchaseInterest ', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async createOrderItem(
    itemInput: OrderItemInput,
    orderId: string
  ): Promise<OrderItem> {
    try {
      const orderItem = await this.db.orderItem.create({
        data: {
          quantity: itemInput.quantity,
          unity: itemInput.unity,
          description: itemInput.description,
          cost: itemInput.cost,
          icms: itemInput.icms,
          ipi: itemInput.ipi,
          deadlineAt: itemInput.deadlineAt,
          shippingAt: itemInput.shippingAt,
          shippingType: itemInput.shippingType || 'Não informado',
          supplierName: itemInput.supplierName,
          supplierEmail: itemInput.supplierEmail,
          supplierPhone: itemInput.supplierPhone,
          order: {
            connect: {
              id: orderId,
            },
          },
          product: {
            connect: {
              id: itemInput.productId,
            },
          },
          address: {
            connect: {
              id: itemInput.addressId,
            },
          },
        },
      })

      itemInput?.additionalInfos.map(async (info) => {
        await this.db.orderItemAdditionalInfo.create({
          data: {
            field: {
              connect: {
                id: info.fieldId,
              },
            },
            orderItem: {
              connect: {
                id: orderItem.id,
              },
            },
            value: info.value,
          },
        })
      })

      return orderItem
    } catch (e) {
      console.debug('OrderService::createOrderItem', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async getAdditionalInfosByOrderItem(
    orderItemId: string
  ): Promise<Array<OrderItemAdditionalInfo>> {
    try {
      const additionalInfos = await this.db.orderItemAdditionalInfo.findMany({
        where: {
          orderItemId,
          // field : {
          //   formId :
          // }
        },
        include: {
          field: true,
        },
      })
      return additionalInfos.map((info) => {
        return {
          field: info.field.label,
          value: info.value,
        }
      })
    } catch (e) {
      console.debug('OrderService::getAdditionalInfosByOrderItem', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async getAdditionalInfosByOrderItemAndForm(
    orderItemId: string,
    formId: string
  ): Promise<Array<OrderItemAdditionalInfo>> {
    try {
      const additionalInfos = await this.db.orderItemAdditionalInfo.findMany({
        where: {
          orderItemId,
          field: {
            formId,
          },
        },
        include: {
          field: true,
        },
      })
      return additionalInfos.map((info) => {
        return {
          field: info.field.label,
          value: info.value,
        }
      })
    } catch (e) {
      console.debug('OrderService::getAdditionalInfosByOrderItem', e.message)
      throw new Error('Something went Wrong')
    }
  }

  async getQuantityByOrder(orderId: string): Promise<number> {
    try {
      const items = await this.db.orderItem.findMany({
        where: { orderId },
        select: { quantity: true },
      })
      return items.reduce((acc, item) => item.quantity + acc, 0)
    } catch (e) {
      console.debug('OrderService::getQuantityByOrder', e.message)
      throw new Error('Something went Wrong')
    }
  }
}

export default OrderService
