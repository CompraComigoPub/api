import { PrismaClient } from '@prisma/client'
import { Category } from '../../src/graphql'
import { categoryService } from '../../src/category/category.service'

const db: PrismaClient = new PrismaClient()

test('create category', async () => {
  const y: Category = {
    label: 'Maskara',
  }

  const x = await categoryService.create(db, y)

  expect(x.label).toBe(y.label)
})

test('remove category', async () => {
  const y = await categoryService.create(db, { label: 'Maskara' })

  const x = await categoryService.remove(db, y.id)

  expect(y).toEqual(x)
})
