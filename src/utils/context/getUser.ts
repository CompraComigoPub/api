import { PrismaClient } from '.prisma/client'
import { verifyIdToken } from '../../firebase/auth'
import { User } from '../../graphql'
import UserService from '../../user/user.service'

const getUser = async (token: string, db: PrismaClient): Promise<User> => {
  if (!token) return null

  try {
    const userService = new UserService(db)
    const decodedToken = await verifyIdToken(token)
    return userService.findByFirebaseId(decodedToken?.uid)
  } catch (err) {
    console.debug('getUser', err.message)
  }
}

export default getUser
