import { PrismaClient } from '@prisma/client'
import {
  MutationAppendAttributeToProductArgs,
  MutationRemoveAttributeFromProductArgs,
  ProductAttribute,
} from '../graphql'
import { RecordNotFoundError, UUIDError } from '../utils/errors'
import { isNullOrUndefined, isUUID } from '../utils/validation'
import { ProductService } from '../product/product.service'
import { AttributeService } from '../attribute/attribute.service'

const create = async (
  db: PrismaClient,
  { productId, attributeId, value }: MutationAppendAttributeToProductArgs
): Promise<ProductAttribute> => {
  if (!isUUID(productId)) {
    throw new UUIDError(`Product: ${productId}`)
  }

  if (!isUUID(attributeId)) {
    throw new UUIDError(`Attribute: ${attributeId}`)
  }

  if (isNullOrUndefined(await ProductService.findUnique(db, productId))) {
    throw new RecordNotFoundError(`Product: ${productId}`)
  }

  if (isNullOrUndefined(await AttributeService.findUnique(db, attributeId))) {
    throw new RecordNotFoundError(`Attribute: ${attributeId}`)
  }

  return await db.productAttribute.create({
    data: {
      value,
      product: {
        connect: {
          id: productId,
        },
      },
      attribute: {
        connect: {
          id: attributeId,
        },
      },
    },
  })
}

const remove = async (
  db: PrismaClient,
  { productId, attributeId }: MutationRemoveAttributeFromProductArgs
): Promise<ProductAttribute> => {
  if (!isUUID(productId)) {
    throw new UUIDError(`Product: ${productId}`)
  }

  if (!isUUID(attributeId)) {
    throw new UUIDError(`Attribute: ${attributeId}`)
  }

  return await db.productAttribute.delete({
    where: {
      productId_attributeId: { productId, attributeId },
    },
  })
}

const findByProductId = async (
  db: PrismaClient,
  productId: string
): Promise<Array<ProductAttribute> | null> => {
  if (!isUUID(productId)) {
    throw new UUIDError(`productId: ${productId}`)
  }

  try {
    return db.productAttribute.findMany({
      where: {
        productId,
      },
    })
  } catch (e) {
    console.error('ProductAttributeService::findByProductId', e.message)
    throw new Error(e)
  }
}

const ProductAttributeService = { create, remove, findByProductId }

export { ProductAttributeService }
