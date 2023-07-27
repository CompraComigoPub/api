import { MutationUpdateOrderStatusArgs, Order } from '../../graphql'
import { Context } from '../../interfaces/context'
import { sendMail } from '../../notifications/mail/sendMail'
import PurchaseInterestService from '../../purchase-interest/purchase-interest.service'
import OrderService from '../order.service'

const updateOrderStatus = async (
  parent: undefined,
  { orderId, status }: MutationUpdateOrderStatusArgs,
  { db, user }: Context
): Promise<Order> => {
  try {
    const orderService = new OrderService(db)
    const order = await orderService.updateOrderStatus(orderId, user.id, status)

    const reprovingLeadershipOrder =
      order.status === 'INVALID' &&
      order.purchaseInterest.leadershipId === order.companyId

    if (reprovingLeadershipOrder && order.purchaseInterest.approvedBy) {
      await new PurchaseInterestService(
        db,
        orderService
      ).reprovePurchaseInterest(order.interestId)
    }

    sendMail({
      to: order.company.users.map((user) => user.email),
      from: process.env.FIREBASE_SENDER_EMAIL,
      templateId:
        order.status === 'VALID'
          ? 'd-c41bd1be7f4f4514bb44803d0eb5c094'
          : 'd-5e5af54ff89148babe7ee6c592c9ddf8',
      subject: 'Compra Comigo - Pedido de compra',
      dynamicTemplateData: {
        purchaseLink: process.env.CLIENT_URL + 'compra/' + order.interestId,
      },
    })
    return order
  } catch (err) {
    console.log(`updateOrderStatus: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default updateOrderStatus
