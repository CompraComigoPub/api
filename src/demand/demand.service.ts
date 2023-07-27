import { Demand, DemandItem, PrismaClient } from '@prisma/client'
import { isUUID } from '../utils/validation'
import {
  AppendDemandItem,
  CreateDemandInput,
  RemoveDemandItem,
  UpdateDemandItem,
} from '../graphql'
import CompanyService from '../company/company.service'
export class DemandService {
  constructor(private readonly db: PrismaClient) {}

  async create(
    demandInput: CreateDemandInput,
    userId: string,
    networkId: string
  ): Promise<Demand | null> {
    const companyService = new CompanyService(this.db)
    if (demandInput.id && !isUUID(demandInput.id)) {
      throw new Error('Demand Id must be a valid UUID')
    }

    if (
      demandInput.id &&
      (await this.db.demand.findUnique({ where: { id: demandInput.id } }))
    ) {
      throw new Error(`Demand with id ${demandInput.id} already exists`)
    }

    if (
      !demandInput.supplierId ||
      !companyService.find(demandInput.supplierId)
    ) {
      throw new Error('Supplier must be a valid')
    }

    const demand = await this.db.demand.create({
      data: {
        supplier: {
          connect: {
            id: demandInput.supplierId,
          },
        },
        createdBy: userId,
        network: {
          connect: {
            id: networkId,
          },
        },
        totalPrice: demandInput?.totalPrice || 0,
      },
    })

    demandInput.items?.forEach(async (item: AppendDemandItem) => {
      this.appendItem(item, demand?.id)
    })

    return demand
  }

  async removeItem(item: RemoveDemandItem): Promise<DemandItem | null> {
    try {
      return this.db.demandItem.delete({
        where: {
          id: item.id,
        },
      })
    } catch (e) {
      console.log(`DemandService::removeItem ${e.message}`)
      throw new Error(e)
    }
  }

  async appendItem(
    item: AppendDemandItem,
    demandId: string
  ): Promise<DemandItem | null> {
    try {
      const demandItem = this.db.demandItem.create({
        data: {
          quantity: item.quantity,
          ipi: item.ipi,
          icms: item.icms,
          price: item.price,
          discount: item.discount,
          description: item.description,
          unity: item.unity,
          demand: {
            connect: {
              id: demandId,
            },
          },
          company: {
            connect: {
              id: item.companyId,
            },
          },
          product: {
            connect: {
              id: item.productId,
            },
          },
        },
      })

      return demandItem
    } catch (e) {
      console.debug(`DemandService::appendItem ${e.message}`)
      throw new Error(e)
    }
  }

  async find(id: string): Promise<Demand | null> {
    const demand = await this.db.demand.findUnique({
      where: { id },
      include: {
        supplier: true,
        item: true,
      },
    })

    return {
      id: demand.id,
      supplierId: demand.supplier.id,
      createdBy: demand.createdBy,
      networkId: demand.networkId,
      totalPrice: demand.totalPrice,
    }
  }
  async updateDemandItems(items: Array<UpdateDemandItem>): Promise<void> {
    try {
      await Promise.all(
        items.map(async (item) => {
          await this.db.demandItem.update({
            data: item,
            where: { id: item.id },
          })
        })
      )
    } catch (e) {
      console.debug(`DemandService::updateDemandItems ${e.message}`)
      throw new Error(e)
    }
  }

  async updateTotalPrice(id: string, totalPrice: number): Promise<void> {
    try {
      await this.db.demand.update({
        where: { id },
        data: { totalPrice },
      })
    } catch (e) {
      console.debug(`DemandService::updateTotalPrice ${e.message}`)
      throw new Error(e)
    }
  }
}
