import { PurchaseInterest, User } from '../../graphql'
import { Context } from '../../interfaces/context'
import UserService from '../../user/user.service'

const operator = async (
  { approvedBy }: PurchaseInterest,
  _: undefined,
  { db }: Context
): Promise<User | null> => {
  try {
    return new UserService(db).find(approvedBy)
  } catch (e) {
    console.log(`operator: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default operator
