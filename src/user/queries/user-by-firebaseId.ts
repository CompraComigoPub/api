import { User, QueryUserByFirebaseIdArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import UserService from '../user.service'

const userByFirebaseId = async (
  parent: undefined,
  { firebaseId }: QueryUserByFirebaseIdArgs,
  { db }: Context
): Promise<User | null> => {
  try {
    return new UserService(db).findByFirebaseId(firebaseId)
  } catch (e) {
    console.log(`user: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default userByFirebaseId
