import { Demand, MutationAppendItemToDemandArgs } from '../../graphql'
import { isNullOrUndefined } from '../../utils/validation'
import { Context } from '../../interfaces/context'

const appendItemToDemand = async (
  parent: undefined,
  args: MutationAppendItemToDemandArgs,
  context: Context
): Promise<Demand | null> => {
  try {
    const { db } = context
    const { item } = args

    const [demand, company, product] = await Promise.all([
      db.demand.findUnique({
        where: { id: item.demandId },
        select: { id: true },
      }),
      db.company.findUnique({
        where: { id: item.companyId },
        select: { id: true },
      }),
      db.product.findUnique({
        where: { id: item.productId },
        select: { id: true },
      }),
    ])

    if (isNullOrUndefined(demand)) {
      throw new Error(`Demand not found with id: ${item.demandId}`)
    }

    if (isNullOrUndefined(company)) {
      throw new Error(`Company not found with id: ${item.companyId}`)
    }

    if (isNullOrUndefined(product)) {
      throw new Error(`Product not found with id: ${item.productId}`)
    }

    const currentDemandItem = db.demandItem.findUnique({
      where: {
        DemandItem_demandId_companyId_productId_unique_idx: {
          demandId: item.demandId,
          companyId: item.companyId,
          productId: item.companyId,
        },
      },
    })

    if (currentDemandItem) {
      throw new Error('This item already exists')
    }

    const demandItem = await db.demandItem.create({
      data: {
        quantity: item.quantity,
        unity: 'N/A',
        ipi: item.ipi,
        icms: item.icms,
        price: item.price,
        discount: item.discount,
        description: item.description,
        company: {
          connect: { id: item.companyId },
        },
        product: {
          connect: { id: item.productId },
        },
        demand: {
          connect: { id: item.demandId },
        },
      },
      select: { companyId: true },
    })

    if (isNullOrUndefined(demandItem)) {
      console.debug('There was not possible to add this item')
      throw new Error('There was not possible to add this item')
    }

    return { id: demandItem.companyId }
  } catch (e) {
    console.debug(`appendItemToDemand ${e.message}`)
    throw new Error(`Something went Wrong: ${e.message}`)
  }
}

export default appendItemToDemand
