import { File, PrismaClient } from '@prisma/client'
import { findOrderFileByOrderId } from '../order-file/order-file.service'

const create = async (file: File, db: PrismaClient): Promise<File> => {
  try {
    return await db.file.create({
      data: {
        filename: file.filename,
        encoding: file.encoding,
        mimetype: file.mimetype,
      },
    })
  } catch (err) {
    console.log(`FileService-create::${err.message}`)
    throw new Error('Something went wrong')
  }
}

const findById = async (id: string, db: PrismaClient): Promise<File> => {
  try {
    return db.file.findUnique({ where: { id } })
  } catch (err) {
    console.log(`FileService-findById::${err.message}`)
    throw new Error('Something went wrong')
  }
}

const findByOrder = async (
  orderId: string,
  db: PrismaClient
): Promise<Array<File>> => {
  try {
    const orderFiles = await findOrderFileByOrderId(orderId, db)

    return Promise.all(
      orderFiles.map((orderFile) => findById(orderFile.fileId, db))
    )
  } catch (err) {
    console.log(`FileService-filesByOrder::${err.message}`)
    throw new Error('Something went wrong')
  }
}

export { create, findById, findByOrder }
