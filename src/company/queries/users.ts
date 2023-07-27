import { Company, User } from '../../graphql'
import { Context } from '../../interfaces/context'

import UserService from '../../user/user.service'

const users = async (
  { id }: Company,
  args: undefined,
  { db }: Context
): Promise<Array<User> | null> => {
  try {
    return new UserService(db).findByCompany(id)
  } catch (e) {
    console.log(`users: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default users
