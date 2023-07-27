import { PrismaClient } from '@prisma/client'
import {
  Pagination,
  Product,
  ProductFilter,
  ProductsPagination,
} from '../graphql'
import { getPagination } from '../utils/db'
import { Pal } from '../utils/prisma'

const create = async (
  db: PrismaClient,
  product: Product
): Promise<Product | null> => {
  try {
    return db.product.create({
      data: {
        id: product.id,
        sku: product.sku,
        name: product.name,
        photo: product.photo,
        description: product.description,
      },
    })
  } catch (e) {
    console.log('ProductService::create: ', e.message)
    throw new Error(e)
  }
}

/**
 * Remove product based on id
 *
 * @TODO: this method is using a custom prisma class
 * @see: https://github.com/prisma/prisma/issues/4650#issuecomment-748169114
 */
const remove = async (
  db: PrismaClient,
  id: string
): Promise<Product | null> => {
  try {
    const product = await findUnique(db, id)
    /* workaround */
    Pal.remove(db, { model: 'Product', where: { id }, deleteParent: true })

    return product
  } catch (e) {
    console.error('ProductService::delete', e.message)
    throw new Error(e)
  }
}

const findMany = async (
  db: PrismaClient,
  pagination?: Pagination,
  filter?: ProductFilter
): Promise<Array<Product> | null> => {
  try {
    return db.product.findMany({
      ...getPagination(pagination),
      where: {
        name: {
          contains: filter?.name || '',
          mode: 'insensitive',
        },
      },
      orderBy: { name: 'asc' },
    })
  } catch (e) {
    console.error('ProductService::findAll', e.message)
    throw new Error(e)
  }
}

const count = async (
  db: PrismaClient,
  filter?: ProductFilter
): Promise<number> => {
  try {
    return db.product.count({
      where: {
        name: {
          contains: filter?.name || '',
          mode: 'insensitive',
        },
      },
    })
  } catch (e) {
    console.error('ProductService::findAll', e.message)
    throw new Error(e)
  }
}

const findUnique = async (
  db: PrismaClient,
  id: string
): Promise<Product | null> => {
  try {
    return db.product.findUnique({ where: { id } })
  } catch (e) {
    console.error('ProductService::find', e.message)
    throw new Error(e)
  }
}

const update = async (
  db: PrismaClient,
  product: Product
): Promise<Product | null> => {
  try {
    return db.product.update({
      where: {
        id: product.id,
      },
      data: {
        id: product.id,
        sku: product.sku,
        name: product.name,
        photo: product.photo,
        description: product.description,
      },
    })
  } catch (e) {
    console.error('ProductService::update', e.message)
    throw new Error(e)
  }
}

const getProductsByCategories = async (
  db: PrismaClient,
  pagination: Pagination,
  categoriesId: Array<string>,
  productName?: string
): Promise<ProductsPagination> => {
  const products = await db.product.findMany({
    ...getPagination(pagination),
    where: {
      name: {
        contains: productName || '',
        mode: 'insensitive',
      },
      productCategories: {
        some: {
          categoryId: {
            in: categoriesId,
          },
        },
      },
    },
  })

  const count = await db.product.count({
    where: {
      name: {
        contains: productName || '',
        mode: 'insensitive',
      },
      productCategories: {
        some: {
          categoryId: {
            in: categoriesId,
          },
        },
      },
    },
  })

  return { products, count }
}

const ProductService = {
  create,
  update,
  remove,
  findUnique,
  findMany,
  count,
  getProductsByCategories,
}

export { ProductService }
