import { PrismaClient } from '@prisma/client'
import { Product } from '../../src/graphql'
import { ProductService as p } from '../../src/product/product.service'

const db: PrismaClient = new PrismaClient()

let data: { categoryId: string } = undefined

beforeAll(async () => {
  await db.$executeRaw('DELETE FROM ccapi.product CASCADE')

  const { id } = await db.category.create({
    data: { label: 'Jest Category' },
    select: { id: true },
  })

  data = { categoryId: id }
})

afterAll(async () => await db.$executeRaw('DELETE FROM ccapi.product CASCADE'))

test('create product', async () => {
  const y: Product = {
    id: undefined,
    sku: 'XPTO123',
    categoryId: data.categoryId,
  }

  const x = await p.create(db, y)

  expect(x.sku).toBe(y.sku)
  expect(x.id).toBeDefined()
})

test('remove product', async () => {
  const y = await p.create(db, {
    id: undefined,
    sku: 'XPTO123',
    categoryId: data.categoryId,
  })

  const z = await p.remove(db, y.id)

  expect(y).toEqual(z)
})
