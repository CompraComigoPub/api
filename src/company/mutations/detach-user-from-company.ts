import { Company, MutationDetachUserFromCompanyArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { isUUID } from '../../utils/validation'

const detachUserFromCompany = async (
  { id }: Company,
  { id: userId }: MutationDetachUserFromCompanyArgs,
  { db }: Context
): Promise<Company | null> => {
  try {
    if (!isUUID(userId)) {
      throw new Error(`User id must be a valid UUID: ${userId}`)
    }

    await db.user.update({
      data: {
        company: {
          disconnect: true,
        },
      },
      where: { id },
    })

    return { id }
  } catch (e) {
    throw new Error(`Something went wrong ${e.message}`)
  }
}

export default detachUserFromCompany
