import { QueryUsersByCompanyArgs, UsersPaginated } from '../../graphql'
import { Context } from '../../interfaces/context'
import UserService from '../user.service'

const usersByCompany = async (
  _: undefined,
  { pagination, filter }: QueryUsersByCompanyArgs,
  { db, user }: Context
): Promise<UsersPaginated> => {
  try {
    return await new UserService(db).findByCompanyPaginated(
      user.companyId,
      pagination,
      filter
    )
  } catch (err) {
    console.log(`usersByCompany: ${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default usersByCompany
