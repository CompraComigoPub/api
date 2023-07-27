import { PrismaClient } from '@prisma/client'
import { AttributeService } from '../../src/attribute/attribute.service'
import { Attribute, Datatype } from '../../src/graphql'

const db: PrismaClient = new PrismaClient()

const clearAll = async (db) =>
  await db.$executeRaw('DELETE FROM ccapi.attribute CASCADE')

beforeEach(async () => await clearAll(db))

afterAll(async () => {
  await clearAll(db)
  await db.$disconnect()
})

test('create an attribute', async () => {
  const attr: Attribute = {
    label: 'jest',
    contentType: Datatype.Varchar,
  }

  const x = await AttributeService.create(db, attr)

  expect(x.label).toBe(attr.label)
  expect(x.contentType).toBe(attr.contentType)
  expect(x.id).toBeDefined()
})

test('update an attribute', async () => {
  const y = await AttributeService.create(db, {
    label: 'jest',
    contentType: Datatype.Varchar,
  })

  const attr: Attribute = {
    label: 'jest updated',
    contentType: Datatype.Varchar,
  }

  const x = await AttributeService.update(db, attr, y.id)

  expect(x.label).toBe(attr.label)
  expect(x.contentType).toBe(attr.contentType)
  expect(x.id).toBe(y.id)
})

test('search an attribute', async () => {
  const y = await AttributeService.create(db, {
    label: 'jest',
    contentType: Datatype.Varchar,
  })

  const attr = await AttributeService.findUnique(db, y.id)

  expect(attr.id).toBe(y.id)
  expect(attr.label).toBe(y.label)
})

test('try to create with invalid label', async () => {
  expect.assertions(1)
  try {
    await AttributeService.create(db, {
      label: 'jest t$%7$o',
      contentType: Datatype.Boolean,
    })
  } catch (e) {
    const message =
      'I founded an error trying to validate: I was expecting a valid name like John Doe, but you gave me t$%7$o'

    expect(e.message).toEqual(message)
  }
})

test('remove attribute', async () => {
  const y = await AttributeService.create(db, {
    label: 'jest',
    contentType: Datatype.Decimal,
  })

  AttributeService.remove(db, y.id)
})

test('search for an attribute', async () => {
  const y = await AttributeService.create(db, {
    label: 'jest',
    contentType: Datatype.Decimal,
  })

  const x = await AttributeService.findUnique(db, y.id)

  expect(x).toEqual(y)
})

test('find many attributes', async () => {
  Promise.all([
    await AttributeService.create(db, {
      label: 'Mask a',
      contentType: Datatype.Varchar,
    }),
    await AttributeService.create(db, {
      label: 'Mask b',
      contentType: Datatype.Varchar,
    }),
    await AttributeService.create(db, {
      label: 'Mask c',
      contentType: Datatype.Varchar,
    }),
    await AttributeService.create(db, {
      label: 'Mask d',
      contentType: Datatype.Varchar,
    }),
    await AttributeService.create(db, {
      label: 'Mask e',
      contentType: Datatype.Varchar,
    }),
  ])

  const xs = await AttributeService.findMany(db)

  expect(xs).toHaveLength(5)
})
