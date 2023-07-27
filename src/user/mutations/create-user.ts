import { User, MutationCreateUserArgs } from '../../graphql'
import {
  isUUID,
  isValidName,
  isNullOrUndefined,
  validateToken,
} from '../../utils/validation'
import { Context } from '../../interfaces/context'
import UserService from '../user.service'
import { ForbiddenError, UserInputError } from 'apollo-server'
import { UUIDError } from '../../utils/errors'
import { createFirebaseUser } from '../../firebase/auth'

const createUser = async (
  parent: undefined,
  { input, token }: MutationCreateUserArgs,
  { db }: Context
): Promise<User | null> => {
  if (!validateToken(token)) throw new ForbiddenError(`Permission denied`)

  const service = new UserService(db)

  if (!isNullOrUndefined(input.id) && !isUUID(input.id)) {
    throw new UUIDError('Id must be an UUIDv4')
  }

  const userInput = await service.findByEmail(input.email)
  if (!isNullOrUndefined(userInput)) {
    throw new UserInputError('User already exists with this email')
  }

  isValidName(input.name)

  const firebaseUser = await createFirebaseUser(input)
  input.firebaseId = firebaseUser.uid

  return await service.create(input)
}

export default createUser
