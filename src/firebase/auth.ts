import { auth } from 'firebase-admin'
import { AddUserInput, AddUserOwnerInput } from '../graphql'
import { authentication } from '.'

export const createFirebaseUser = async (
  user: AddUserInput | AddUserOwnerInput
): Promise<auth.UserRecord | null> => {
  try {
    return authentication.createUser({
      email: user.email,
      password: user.password,
      displayName: user.name,
    })
  } catch (err) {
    throw new Error(
      `Error when trying to create user in firebase with email ${user.email}`
    )
  }
}

export const verifyIdToken = async (
  token: string
): Promise<auth.DecodedIdToken | null> => {
  try {
    return authentication.verifyIdToken(token)
  } catch (err) {
    console.error(
      `Error when trying to verify user in firebase with token ${token}`
    )
  }
}

export const generatePasswordResetLink = async (
  email: string
): Promise<string> => {
  try {
    return authentication.generatePasswordResetLink(email)
  } catch (err) {
    console.error(
      `Error when trying to generate password reset link with ${email}`
    )
    throw new Error(err.message)
  }
}
export const getUserByEmail = async (
  email: string
): Promise<auth.UserRecord> => {
  try {
    return authentication.getUserByEmail(email)
  } catch (err) {
    console.error(`Error when trying to get user with email : ${email}`)
    return null
  }
}

export const removeFirbaseUser = async (uid: string): Promise<void> => {
  try {
    return authentication.deleteUser(uid)
  } catch (err) {
    console.error(`Error when trying to remove user with uid: ${uid}`)
    return null
  }
}
