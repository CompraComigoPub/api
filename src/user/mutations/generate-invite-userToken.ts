import { ForbiddenError } from 'apollo-server'
import { InviteTokenResponse } from '../../graphql'
import { Context } from '../../interfaces/context'
import jwt from 'jsonwebtoken'

const generateInviteUserToken = async (
  _: undefined,
  args: undefined,
  { user }: Context
): Promise<InviteTokenResponse> => {
  if (user?.role !== 'OWNER') throw new ForbiddenError('Permission denied')
  try {
    const inviteToken = jwt.sign(
      {
        userId: user.id,
        companyId: user.companyId,
      },
      'secret',
      {
        expiresIn: '72h',
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

export default generateInviteUserToken
