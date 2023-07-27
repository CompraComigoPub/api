import jwt from 'jsonwebtoken'
import validator from 'validator'

export const isUUID = (uuid: string): boolean => validator.isUUID(uuid)
export const isNull = (value: unknown): boolean => value === null
export const isUndefined = (value: unknown): boolean => value === undefined
export const isNullOrUndefined = (value: unknown): boolean =>
  isNull(value) || isUndefined(value)

/**
 * This function maybe throw an error, but I don't how to let
 * it be more clear, then I put boolean|Error as return type
 */
export const isValidName = (value: string): boolean | Error => {
  value.split(' ').map((x) => {
    if (!validator.isAlpha(x, 'pt-BR')) {
      throw new Error(
        `I was expecting a valid name like John Doe, but you gave me ${x}`
      )
    }
  })

  return true
}

export const validateUUID = (id: string) => {
  return !isNullOrUndefined(id) && isUUID(id)
}

export const validateToken = (token: string) => {
  try {
    return jwt.verify(token, 'secret')
  } catch (e) {
    console.error('error when trying to decode invite token', e.message)
    return null
  }
}

export const isValidStatus = (status: string): boolean => status === 'VALID'
