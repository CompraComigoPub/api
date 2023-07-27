import { Invoice, QueryInvoiceArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import invoiceService from '../invoice.service'
import user from '../../user/queries/user'
import { AuthenticationError } from 'apollo-server'

const invoice = async (
  parent: undefined,
  { id }: QueryInvoiceArgs,
  { db }: Context
): Promise<Invoice | null> => {
  try {
    return await invoiceService.find(db, id)
  } catch (e) {
    console.log('Something went wrong', e.message)
    throw new Error(`Something went wrong: ${e.message}`)
  }
}

export default invoice
