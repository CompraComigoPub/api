import { ForbiddenError } from 'apollo-server'
import { InvoicePagination, QueryInvoicesPaginationArgs } from '../../graphql'

import { Context } from '../../interfaces/context'
import invoiceService from '../invoice.service'

const invoicesByPagination = async (
  _: undefined,
  { pagination, filter }: QueryInvoicesPaginationArgs,
  { roleCompany, networkId, db }: Context
): Promise<InvoicePagination> => {
  try {
    return await invoiceService.findPagination(
      db,
      pagination,
      filter,
      networkId
    )
  } catch (err) {
    console.debug('invoicesByPagination:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

export default invoicesByPagination
