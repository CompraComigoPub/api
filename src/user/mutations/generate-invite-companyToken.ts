import {
  InviteTokenResponse,
  MutationGenerateInviteCompanyTokenArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import jwt from 'jsonwebtoken'

const generateInviteCompanyToken = async (
  _: undefined,
  { role }: MutationGenerateInviteCompanyTokenArgs,
  { user, networkId }: Context
): Promise<InviteTokenResponse> => {
  try {
    const inviteToken = jwt.sign(
      {
        userId: user.id,
        role,
        networkId,
      },
      'secret',
      {
        expiresIn: '30d',
      }
    )

    return {
      code: '200',
      success: true,
      message: 'Success',
      tokenGenerated: inviteToken,
    }
  } catch (err) {
    return {
      code: err.code,
      success: false,
      message: err.message,
      tokenGenerated: null,
    }
  }
}

export default generateInviteCompanyToken
