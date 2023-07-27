import { PrismaClient } from '@prisma/client'
import { categoryAttributeService } from '../../src/category-attribute/category-attribute.service'

const db: PrismaClient = new PrismaClient()

const clearAll = (db) => {
  Promise.all([
    db.$executeRaw('DELETE FROM ccapi.category_attribute'),
    db.$executeRaw('DELETE FROM ccapi.category CASCADE'),
    db.$executeRaw('DELETE FROM ccapi.attribute CASCADE'),
  ])
}

const initDatabase = async (
  db: PrismaClient
): Promise<{
  categoryId: string
  attributeId: string
}> => {
  const { id: categoryId } = await db.category.create({
    data: { label: 'Jest' },
    select: { id: true },
  })

  const { id: attributeId } = await db.attribute.create({
    data: { label: 'cor' },
    select: { id: true },
  })

  return { categoryId, attributeId }
}

let data: { categoryId: string; attributeId: string } = undefined

beforeAll(async () => {
  await clearAll(db)

  data = await initDatabase(db)
  console.log('DATA', data)
})

afterAll(async () => await clearAll(db))

test('create categoryAttribute', async () => {
  const x = await categoryAttributeService.create(db, {
    categoryId: data.categoryId,
    attributeId: data.attributeId,
  })

  expect(x).toEqual(data)
})

test('remove categoryAttribute', async () => {
  const x = await categoryAttributeService.remove(db, {
    categoryId: data.categoryId,
    attributeId: data.attributeId,
  })

  expect(x).toEqual(data)
})
