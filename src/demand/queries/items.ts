import { DemandItem } from '.prisma/client'
import { Demand } from '../../graphql'
import { Context } from '../../interfaces/context'

const items = async (
  { id }: Demand,
  _: unknown,
  { db }: Context
): Promise<Array<DemandItem> | []> => {
  return await db.demandItem.findMany({
    where: {
      demandId: id,
    },
    orderBy: { productId: 'asc' },
    include: {
      product: true,
    },
  })
}

export default items
