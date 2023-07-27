import { User, MutationRemoveUserArgs } from '../../graphql'
import { isUUID } from '../../utils/validation'
import { Context } from '../../interfaces/context'
import UserService from '../user.service'
import { ForbiddenError } from 'apollo-server'
import { getUserByEmail, removeFirbaseUser } from '../../firebase/auth'

const removeUser = async (
  _parent: undefined,
  { input }: MutationRemoveUserArgs,
  { db, user }: Context
): Promise<User | null> => {
  try {
    if (!isUUID(input.id)) {
      throw new Error('ID must be a valid uuid!')
    }
    if (user?.role !== 'OWNER') throw new ForbiddenError('Permission denied')

    const userService = new UserService(db)

    const oldUser = await userService.find(input.id)
    const { uid } = await getUserByEmail(oldUser.email)
    await removeFirbaseUser(uid)

    return await new UserService(db).remove(input)
  } catch (e) {
    console.log(`removeUser: ${e.message}`)
    throw new Error('Something went Wrong')
  }
}

export default removeUser
