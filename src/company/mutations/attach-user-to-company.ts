import { UserInputError } from 'apollo-server'
import { Company, MutationAttachUserToCompanyArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { isNull, isUUID } from '../../utils/validation'

const attachUserToCompany = async (
  parent: undefined,
  { userId, companyId }: MutationAttachUserToCompanyArgs,
  { db }: Context
): Promise<Company | null> => {
  try {
    if (!isUUID(userId)) {
      throw new Error(`User id must be a valid UUID: ${userId}`)
    }

    const user = await db.user.findUnique({
      where: { id: userId },
      select: { companyId: true },
    })

    if (!isNull(user.companyId)) {
      throw new Error('User is already associated to a company')
    }

    await db.user.update({
      data: {
        company: {
          connect: {
            id: companyId,
          },
        },
      },
      where: { id: userId },
    })

    return { id: companyId }
  } catch (e) {
    throw new UserInputError('Something Went Wrong', { message: e.message })
  }
}

export default attachUserToCompany
