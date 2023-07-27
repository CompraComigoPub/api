import { ForbiddenError } from 'apollo-server'
import { InvoicePagination, QueryInvoicesBySellerArgs } from '../../graphql'

import { Context } from '../../interfaces/context'
import invoiceService from '../invoice.service'

const invoicesBySeller = async (
  _: undefined,
  { pagination, filter }: QueryInvoicesBySellerArgs,
  { roleCompany, networkId, user, db }: Context
): Promise<InvoicePagination> => {
  if (roleCompany !== 'SELLER') throw new ForbiddenError('Permission denied')
  try {
    return await invoiceService.findBySellerPagination(
      db,
      pagination,
      filter,
      user.companyId,
      networkId
    )
  } catch (err) {
    console.debug('invoicesBySeller:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

export default invoicesBySeller
