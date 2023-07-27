import sgMail, { MailDataRequired } from '@sendgrid/mail'
import { ClientResponse } from '@sendgrid/client/src/response'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendMail = async (
  message: MailDataRequired
): Promise<ClientResponse> => {
  try {
    return await sgMail.send(message)[0]
  } catch (err) {
    console.debug(
      `error while trying to send a email with sendGrid: ${err.message}`
    )
    throw new Error('Something went Wrong')
  }
}
