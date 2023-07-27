import CompanyService from '../../company/company.service'
import {
  SendEmailResponse,
  MutationSendEmailWithUserInfoArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import { sendMail } from '../../notifications/mail/sendMail'

const sendEmailWithUserInfo = async (
  _: undefined,
  { message }: MutationSendEmailWithUserInfoArgs,
  { user, db }: Context
): Promise<SendEmailResponse | null> => {
  try {
    const company = await new CompanyService(db).find(user.companyId)
    await sendMail({
      to: process.env.OPERATOR_EMAIL,
      from: process.env.FIREBASE_SENDER_EMAIL,
      subject: `Compra Comigo - Informações adicionais da empresa ${company.tradeName}`,
      html: `<p>${message}</p>`,
    })

    return {
      code: '200',
      success: true,
      message: 'Successfully sent email',
    }
  } catch (err) {
    console.log(`sendEmailWithUserInfo: ${err.message}`)
    return {
      code: err.code.toString(),
      success: false,
      message: err.message,
    }
  }
}

export default sendEmailWithUserInfo
