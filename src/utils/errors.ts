class UUIDError extends Error {
  constructor(uuid: string) {
    super(
      `I was expecting a valid UUID like 3f3b168d-73a0-492f-a690-d35317a24e89, but you gave me this: ${uuid}`
    )
    this.message = 'UUIDError'
  }
}

class RecordNotFoundError extends Error {
  constructor(uuid: string) {
    super(`I tried to find this record: ${uuid}, but it was not possible`)
    this.name = 'RecordNotFoundError'
  }
}

class ValidationError extends Error {
  constructor(message: string) {
    super(`I founded an error trying to validate: ${message}`)
    this.name = 'ValidationError'
  }
}

class CreateError extends Error {
  constructor(message: string) {
    super(`I tried but couldn't save the record: ${message}`)
    this.name = 'CreateError'
  }
}

export { UUIDError, RecordNotFoundError, ValidationError, CreateError }
