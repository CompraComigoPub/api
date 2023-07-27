import {
  MutationApprovePurchaseInterestArgs,
  PurchaseInterest,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import { getCompaniesIdByNetworkAndRole } from '../../network/network-company.service'
import { sendMail } from '../../notifications/mail/sendMail'
import OrderService from '../../order/order.service'
import PurchaseInterestService from '../purchase-interest.service'
import activityService from '../../notifications/activities/activies.service'

const approvePurchaseInterest = async (
  parent: undefined,
  { purchaseInterestId }: MutationApprovePurchaseInterestArgs,
  { db, user, networkId }: Context
): Promise<PurchaseInterest> => {
  try {
    const orderService = new OrderService(db)
    const purchaseInterest = await new PurchaseInterestService(
      db,
      orderService
    ).approvePurchaseInterest(purchaseInterestId, user.id)

    // approve leadership order
    const order = await orderService.findByInterestAndCompany(
      purchaseInterestId,
      purchaseInterest.leadershipId,
      false
    )
    orderService.updateOrderStatus(order.id, user.id, 'VALID')

    // send notification
    sendMail({
      to: purchaseInterest.leadership.users.map((user) => user.email),
      from: process.env.FIREBASE_SENDER_EMAIL,
      templateId: 'd-c41bd1be7f4f4514bb44803d0eb5c094',
      subject: 'Compra Comigo - Pedido de compra',
      dynamicTemplateData: {
        purchaseLink: process.env.CLIENT_URL + 'compra/' + order.interestId,
      },
    })

    // register activity in firebase

    const companiesId = await getCompaniesIdByNetworkAndRole(db, networkId, [
      'BUYER',
    ])
    activityService.registerActivity(
      companiesId,
      `Nova publicação adicionada`,
      `/compra/${purchaseInterest.id}`
    )

    return purchaseInterest
  } catch (err) {
    console.debug(`approvePurchaseInterest: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default approvePurchaseInterest
