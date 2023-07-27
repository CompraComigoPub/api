import { CategoryAttribute, PrismaClient } from '@prisma/client'
import { UUIDError } from '../utils/errors'
import { isUUID } from '../utils/validation'

const create = async (
  db: PrismaClient,
  { categoryId, attributeId }: CategoryAttribute
): Promise<CategoryAttribute> => {
  if (!isUUID(categoryId)) {
    throw new UUIDError(`Category: ${categoryId}`)
  }

  if (!isUUID(attributeId)) {
    throw new UUIDError(`Attribute: ${attributeId}`)
  }

  return db.categoryAttribute.create({
    data: {
      category: {
        connect: {
          id: categoryId,
        },
      },
      attribute: { connect: { id: attributeId } },
    },
  })
}

const remove = async (
  db: PrismaClient,
  { categoryId, attributeId }: CategoryAttribute
): Promise<CategoryAttribute> => {
  if (!isUUID(categoryId)) {
    throw new UUIDError(`Category: ${categoryId}`)
  }

  if (!isUUID(attributeId)) {
    throw new UUIDError(`Attribute: ${attributeId}`)
  }

  return db.categoryAttribute.delete({
    where: { categoryId_attributeId: { categoryId, attributeId } },
  })
}

const categoryAttributeService = { create, remove }

export { categoryAttributeService }
