import { PurchaseInterest, User } from '../../graphql'
import { Context } from '../../interfaces/context'
import UserService from '../../user/user.service'

const creator = async (
  { createdBy }: PurchaseInterest,
  _: undefined,
  { db }: Context
): Promise<User | null> => {
  try {
    return new UserService(db).find(createdBy)
  } catch (e) {
    console.log(`creator: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default creator
