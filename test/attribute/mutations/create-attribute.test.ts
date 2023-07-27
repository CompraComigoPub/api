import { PrismaClient } from '@prisma/client'
import {
  createAttribute,
  removeAttribute,
  updateAttribute,
} from '../../../src/attribute/mutations'
import { attribute as getAttribute } from '../../../src/attribute/queries'
import { Attribute, Datatype } from '../../../src/graphql'

const db: PrismaClient = new PrismaClient()

const clearAll = () => db.$executeRaw('DELETE FROM ccapi.attribute CASCADE')

beforeAll(() => clearAll())
afterAll(() => clearAll())

const attribute: Attribute = {
  label: 'Jest Mutation',
  contentType: Datatype.Varchar,
}

test('attribute creation', async () => {
  const attr = await createAttribute(undefined, { attribute }, { db })

  expect(attr.id).toBeDefined()
  expect(attr.label).toBe(attribute.label)
  expect(attr.contentType).toBe(attribute.contentType)
})

test('attribute update', async () => {
  const y = await createAttribute(undefined, { attribute }, { db })

  const x = await updateAttribute(
    undefined,
    {
      attribute: { ...y, label: 'Jest Update Mutation' },
      id: y.id,
    },
    { db }
  )

  expect(x.id).toBe(y.id)
  expect(x.label).toBe('Jest Update Mutation')
})

test('attribute remove', async () => {
  const y = await createAttribute(undefined, { attribute }, { db })

  const attr = await removeAttribute(undefined, { id: y.id }, { db })

  expect(attr).toEqual(y)
})

test('get attribute', async () => {
  const y = await createAttribute(undefined, { attribute }, { db })

  const x = await getAttribute(undefined, { id: y.id }, { db })

  expect(x).toEqual(y)
})
