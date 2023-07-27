import { ForbiddenError } from 'apollo-server'
import { InvoicePagination, QueryInvoicesByBuyerArgs } from '../../graphql'

import { Context } from '../../interfaces/context'
import invoiceService from '../invoice.service'

const invoicesByBuyer = async (
  _: undefined,
  { pagination, filter }: QueryInvoicesByBuyerArgs,
  { roleCompany, networkId, user, db }: Context
): Promise<InvoicePagination> => {
  if (roleCompany !== 'BUYER') throw new ForbiddenError('Permission denied')
  try {
    return await invoiceService.findByBuyerPagination(
      db,
      pagination,
      filter,
      user.companyId,
      networkId
    )
  } catch (err) {
    console.debug('invoicesByBuyer:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

export default invoicesByBuyer
