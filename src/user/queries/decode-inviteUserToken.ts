import {
  DecodeInviteUserTokenResponse,
  QueryDecodeInviteUserTokenArgs,
} from '../../graphql'
import jwt from 'jsonwebtoken'

const decodeInviteUserToken = async (
  _: undefined,
  { token }: QueryDecodeInviteUserTokenArgs
): Promise<DecodeInviteUserTokenResponse> => {
  try {
    const decoded = jwt.verify(token, 'secret')
    const userId = (decoded as any).userId
    const companyId = (decoded as any).companyId
    if (!companyId) throw new Error(`Invalid user token`)
    return {
      code: '200',
      success: true,
      message: 'Success',
      decodedToken: {
        userId,
        companyId,
      },
    }
  } catch (err) {
    console.log(`decodeInviteUserToken: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default decodeInviteUserToken
