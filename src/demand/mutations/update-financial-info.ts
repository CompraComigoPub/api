import { ForbiddenError } from 'apollo-server-core'
import { MutationUpdateFinancialInfoArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { DemandService } from '../demand.service'

const updateFinancialInfo = async (
  _: undefined,
  { items, demandId, totalPrice }: MutationUpdateFinancialInfoArgs,
  { roleCompany, db, user }: Context
): Promise<boolean> => {
  if (roleCompany === 'BUYER') throw new ForbiddenError('Permission denied')

  try {
    const demandService = new DemandService(db)

    if (roleCompany === 'SELLER') {
      const demand = await demandService.find(demandId)
      if (demand.supplierId !== user.companyId)
        throw new ForbiddenError('Permission denied')
    }
    await demandService.updateDemandItems(items)
    await demandService.updateTotalPrice(demandId, totalPrice)
    return true
  } catch (e) {
    console.log('updateFinancialInfo::' + e.message)
    throw new Error('Something went wrong')
  }
}

export default updateFinancialInfo
