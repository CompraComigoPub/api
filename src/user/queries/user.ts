import { AuthenticationError } from 'apollo-server'
import { User } from '../../graphql'
import { Context } from '../../interfaces/context'
import UserService from '../user.service'

const user = async (
  parent: undefined,
  args: undefined,
  { db, user, roleCompany, status, networkId }: Context
): Promise<User | null> => {
  try {
    const result = await new UserService(db).find(user.id)
    result.roleCompany = roleCompany
    result.companyStatus = status
    result.companyNetworkId = networkId
    return result
  } catch (e) {
    console.log(`user: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default user
