import { OrderFile, PrismaClient } from '@prisma/client'

const createOrderFile = async (
  fileId: string,
  orderId: string,
  db: PrismaClient
): Promise<OrderFile> => {
  try {
    return await db.orderFile.create({
      data: {
        order: {
          connect: {
            id: orderId,
          },
        },
        file: {
          connect: {
            id: fileId,
          },
        },
      },
    })
  } catch (err) {
    console.log('OrderFileService::appendFiletoOrder', err.message)
    throw new Error('Something went wrong')
  }
}

const findOrderFileByOrderId = async (
  orderId: string,
  db: PrismaClient
): Promise<Array<OrderFile>> => {
  try {
    return db.orderFile.findMany({
      where: {
        orderId: orderId,
      },
    })
  } catch (err) {
    console.log('OrderFileService::findOrderFileByOrderId', err.message)
    throw new Error('Something went wrong')
  }
}

export { createOrderFile, findOrderFileByOrderId }
