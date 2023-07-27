import { PrismaClient } from '@prisma/client'
import { Network, Pagination } from '../graphql'
import { isValidName, isNullOrUndefined } from '../utils/validation'

/**
 * Remove a registry based on id
 */
const remove = async (db: PrismaClient, id: string): Promise<Network> =>
  await db.network.delete({ where: { id } })

/**
 * Check if a network exists
 */
const exists = async (db: PrismaClient, id: string): Promise<boolean> =>
  !isNullOrUndefined(await db.network.findUnique({ where: { id } }))

/**
 * Create a new registry
 */
const create = async (db: PrismaClient, input: Network): Promise<Network> =>
  await db.network.create({
    data: {
      id: input.id,
      name: input.name,
    },
  })

/**
 * Update registry
 */
const update = async (
  db: PrismaClient,
  input: Network,
  id: string
): Promise<Network> =>
  await db.network.update({ data: { name: input.name }, where: { id } })

/**
 * Search for registries
 */
const search = async (
  db: PrismaClient,
  pagination?: Pagination
): Promise<Array<Network>> =>
  await db.network.findMany({
    take: pagination?.take ?? 10,
    skip: pagination?.skip ?? 0,
    cursor: !isNullOrUndefined(pagination?.cursor)
      ? { id: pagination.cursor }
      : undefined,
  })

const findUnique = async (db: PrismaClient, id: string): Promise<Network> =>
  await db.network.findUnique({ where: { id } })

const count = async (db: PrismaClient, where?: unknown): Promise<number> =>
  await db.network.count({ where: where ?? {} })

const validate = (input: Network): boolean | Error => isValidName(input.name)

export { remove, exists, create, validate, search, count, findUnique, update }
