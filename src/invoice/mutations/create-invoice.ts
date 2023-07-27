import { Invoice, MutationCreateInvoiceArgs } from '../../graphql'
import { isNull, isUUID, isUndefined } from '../../utils/validation'
import { Context } from '../../interfaces/context'
import invoiceService from '../invoice.service'

const createInvoice = async (
  parent: undefined,
  { invoice }: MutationCreateInvoiceArgs,
  context: Context
): Promise<Invoice | null> => {
  try {
    const { db } = context

    return await invoiceService.createInvoice(db, invoice)
  } catch (e) {
    console.error('Something went wrong: ', e.message)
    throw new Error(`Something went wrong: ${e.message}`)
  }
}

export default createInvoice
