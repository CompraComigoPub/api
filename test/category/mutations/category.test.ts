import { PrismaClient } from '@prisma/client'
import { createCategory, removeCategory } from '../../../src/category/mutations'

let db: PrismaClient = undefined

describe('test category workflow', () => {
  beforeAll(() => {
    db = new PrismaClient()

    db.$executeRaw('DELETE FROM category CASCADE')
  })

  afterAll(() => {
    db.$executeRaw('DELETE FROM category CASCADE')
    db.$disconnect()
  })

  test('create category', async () => {
    const x = await createCategory(
      undefined,
      { category: { label: 'Maskara' } },
      { db }
    )

    expect(x.id).toBeDefined()
  })

  test('remove category', async () => {
    const y = await createCategory(
      undefined,
      { category: { label: 'Maskara' } },
      { db }
    )

    const x = await removeCategory(undefined, { id: y.id }, { db })

    expect(x.id).toBe(y.id)
  })
})
