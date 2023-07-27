import { PrismaClient } from '@prisma/client'
import { Attribute, Datatype, Pagination } from '../graphql'
import { getPagination } from '../utils/db'
import { RecordNotFoundError, ValidationError } from '../utils/errors'
import { isNullOrUndefined, isValidName } from '../utils/validation'

/**
 * Create a new Attribute
 */
const create = async (
  db: PrismaClient,
  { label, contentType }: Attribute
): Promise<Attribute> => {
  try {
    validate({ label, contentType })
  } catch (e) {
    throw new ValidationError(e.message)
  }

  const attr = await db.attribute.create({ data: { label, contentType } })

  return {
    ...attr,
    contentType: attr.contentType as Datatype,
  }
}

/**
 * Apply some validation
 */
const validate = (attr: Attribute) => {
  if (isNullOrUndefined(attr.label) || !isValidName(attr.label)) {
    throw new ValidationError(attr.label)
  }
}

/**
 * Remove an attribute
 */
const remove = async (db: PrismaClient, id: string): Promise<Attribute> => {
  const attr = await db.attribute.delete({ where: { id } })

  return {
    ...attr,
    contentType: attr.contentType as Datatype,
  }
}

/**
 * Update an attribute
 */
const update = async (
  db: PrismaClient,
  { label }: { label: string },
  id: string
): Promise<Attribute> => {
  const attr = await db.attribute.update({ data: { label }, where: { id } })

  return {
    ...attr,
    contentType: attr.contentType as Datatype,
  }
}

/**
 * Search attribute by id
 */
const findUnique = async (db: PrismaClient, id: string): Promise<Attribute> => {
  const attr = await db.attribute.findUnique({ where: { id } })

  if (isNullOrUndefined(attr)) {
    throw new RecordNotFoundError(id)
  }

  return {
    ...attr,
    contentType: attr?.contentType as Datatype,
  }
}

/**
 * Find Many attributes
 */
const findMany = async (
  db: PrismaClient,
  pagination?: Pagination
): Promise<Array<Attribute>> => {
  const xs = await db.attribute.findMany({
    ...getPagination(pagination),
  })

  return xs.map((x) => {
    return {
      ...x,
      contentType: x.contentType as Datatype,
    }
  })
}

/**
 * Count attribute
 */
const count = async (db: PrismaClient): Promise<number> =>
  await db.attribute.count()

const AttributeService = { create, remove, update, findUnique, findMany, count }

export { AttributeService }
