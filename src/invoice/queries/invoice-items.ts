import { Invoice, InvoiceItem } from '../../graphql'
import { Context } from '../../interfaces/context'

const items = async (
  parent: Invoice,
  args: undefined,
  context: Context
): Promise<InvoiceItem[] | null> => {
  const invoiceItem = await context.db.invoice
    .findUnique({
      where: { id: parent.id },
    })
    .items()

  return invoiceItem
}

export default items
