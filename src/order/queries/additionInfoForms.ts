import { OrderItem } from '.prisma/client'
import { AdditionalInfoForm, OrderItemAdditionalInfo } from '../../graphql'
import { Context } from '../../interfaces/context'
import OrderService from '../order.service'
import productFormService from '../../product/product-form.service'

const additionalInfoForms = async (
  { id, productId }: OrderItem,
  _: undefined,
  { db }: Context
): Promise<Array<AdditionalInfoForm>> => {
  try {
    const forms = await productFormService.getFormsByProductId(db, productId)
    const additionalInfos: Array<Array<OrderItemAdditionalInfo>> = []
    const orderService = new OrderService(db)

    for (const form of forms) {
      const additionalInfo = await orderService.getAdditionalInfosByOrderItemAndForm(
        id,
        form.id
      )
      additionalInfos.push(additionalInfo)
    }

    return forms.map((form, index) => {
      return {
        name: form.name,
        infos: additionalInfos[index],
      }
    })
  } catch (err) {
    console.log(`additionalInfos: ${err.message}}`)
    throw new Error('Something went wrong')
  }
}

export default additionalInfoForms
