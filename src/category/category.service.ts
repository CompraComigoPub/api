import { PrismaClient } from '@prisma/client'
import { Category, CreateCategoryInput, Pagination } from '../graphql'
import { getPagination } from '../utils/db'

/**
 * Create Company
 * @param db: PrismaClient
 * @param category: Category
 */
const create = async (
  db: PrismaClient,
  data: CreateCategoryInput
): Promise<Category> => {
  return await db.category.create({
    data: {
      label: data.label,
      photo: data.photo,
      description: data.description,
      parentCategory: data.parentId
        ? {
            connect: {
              id: data.parentId,
            },
          }
        : undefined,
    },
  })
}

/**
 * Remove category
 * @param id: String(UUID)
 */
const remove = async (db: PrismaClient, id: string): Promise<Category> =>
  await db.category.delete({ where: { id } })

/**
 * Update category
 * @param db: PrismaClient
 * @param category: Category
 * @param id: String(UUID)
 */
const update = async (
  db: PrismaClient,
  { label }: Category,
  id: string
): Promise<Category> =>
  await db.category.update({ data: { label }, where: { id } })

/**
 * Find category
 * @param id: String(UUID)
 */
const findUnique = async (db: PrismaClient, id: string): Promise<Category> =>
  await db.category.findUnique({ where: { id } })

/**
 * Find Many categories
 * @param db: PrismaClient
 * @param pagination: Pagination
 */
const findMany = async (
  db: PrismaClient,
  pagination?: Pagination
): Promise<Array<Category>> =>
  await db.category.findMany({
    ...getPagination(pagination),
  })

const findCategoriesByNetwork = async (
  db: PrismaClient,
  networkId: string
): Promise<Array<Category>> => {
  const networkCategories = await db.networkCategory.findMany({
    where: {
      networkId,
      category: {
        parentId: null,
      },
    },

    select: { category: true },
  })

  return networkCategories.map((networkCategory) => networkCategory.category)
}
const findCategoriesByProduct = async (
  db: PrismaClient,
  productId: string
): Promise<Array<Category>> => {
  const productCategories = await db.productCategory.findMany({
    where: {
      productId,
    },
    select: {
      category: true,
    },
  })
  return productCategories.map((productCategory) => productCategory.category)
}

const findSubCategoriesByCategoryId = async (
  db: PrismaClient,
  categoryId: string
): Promise<Array<Category>> => {
  return await db.category.findMany({
    where: {
      parentId: categoryId,
    },
  })
}

const categoryService = {
  create,
  remove,
  update,
  findUnique,
  findMany,
  findCategoriesByNetwork,
  findCategoriesByProduct,
  findSubCategoriesByCategoryId,
}

export { categoryService }
