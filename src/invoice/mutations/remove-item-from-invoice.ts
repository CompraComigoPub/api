import { Invoice, MutationRemoveItemFromInvoiceArgs } from '../../graphql'
import { isUUID } from '../../utils/validation'
import { Context } from '../../interfaces/context'

const removeItemFromInvoice = async (
  parent: undefined,
  args: MutationRemoveItemFromInvoiceArgs,
  context: Context
): Promise<Invoice | null> => {
  try {
    const { itemId: id } = args

    if (!isUUID(id)) {
      throw new Error(`The informed id is not valid UUID: ${id}`)
    }

    const invoiceItem = await context.db.invoiceItem.delete({
      where: { id },
      select: { invoiceId: true },
    })

    return { id: invoiceItem.invoiceId }
  } catch (e) {
    console.error('Something went Wrong: ', e.message)
    throw new Error(`Something went Wrong: ${e.message}`)
  }
}

export default removeItemFromInvoice
