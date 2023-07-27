import { User, MutationUpdateUserArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import UserService from '../user.service'

const updateUser = async (
  _parent: undefined,
  { input }: MutationUpdateUserArgs,
  { db }: Context
): Promise<User> => {
  try {
    return await new UserService(db).update(input)
  } catch (e) {
    console.log(`updateUser: ${e.message}`)
    throw new Error('Something went Wrong')
  }
}

export default updateUser
