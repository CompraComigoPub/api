import { generatePasswordResetLink } from '../../firebase/auth'
import { MutationResponse, MutationUpdatePasswordArgs } from '../../graphql'
import { sendMail } from '../../notifications/mail/sendMail'

const updatePassword = async (
  parent: undefined,
  { email }: MutationUpdatePasswordArgs
): Promise<MutationResponse | null> => {
  try {
    const emailGenerated = await generatePasswordResetLink(email)
    await sendMail({
      to: email,
      from: process.env.FIREBASE_SENDER_EMAIL,
      subject: 'Compra Comigo - Redefinição de senha',
      templateId: 'd-1392d8758a5d4fddb5853b787ff5efda',
      dynamicTemplateData: {
        emailGenerated,
      },
    })
    return {
      code: '200',
      success: true,
      message: 'Successfully sent password reset email',
    }
  } catch (err) {
    return {
      code: err.code.toString(),
      success: false,
      message: err.message,
    }
  }
}

export default updatePassword
