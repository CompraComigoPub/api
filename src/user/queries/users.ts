import { User } from '../../graphql'
import { Context } from '../../interfaces/context'
import UserService from '../user.service'

const users = async (
  parent: undefined,
  args: undefined,
  { db }: Context
): Promise<Array<User> | null> => {
  try {
    return new UserService(db).findAll()
  } catch (e) {
    console.log(`products: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default users
