import {
  DecodeInviteCompanyTokenResponse,
  QueryDecodeInviteCompanyTokenArgs,
} from '../../graphql'
import jwt from 'jsonwebtoken'

const decodeInviteCompanyToken = async (
  _: undefined,
  { token }: QueryDecodeInviteCompanyTokenArgs
): Promise<DecodeInviteCompanyTokenResponse> => {
  try {
    const decoded = jwt.verify(token, 'secret')
    const userId = (decoded as any).userId
    const role = (decoded as any).role
    const networkId = (decoded as any).networkId
    if (!role || !networkId) throw new Error(`Invalid company token`)
    return {
      code: '200',
      success: true,
      message: 'Success',
      decodedToken: {
        userId,
        role,
        networkId,
      },
    }
  } catch (err) {
    console.log(`decodeInviteCompanyToken: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default decodeInviteCompanyToken
