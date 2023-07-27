import { File } from '@prisma/client'
import { MutationSingleUploadArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { Uploader } from '../../utils/uploader'
import { create } from '../file.service'

const uploader = new Uploader({
  accessKeyId: String(process.env.AWS_ACCESS_KEY),
  secretAccessKey: String(process.env.AWS_SECRET),
  destinationBucketName: String(process.env.AWS_S3_BUCKET_FILES),
  region: String(process.env.DEFAULT_REGION),
})

const uploadFile = async (
  _: unknown,
  { file: { file } }: MutationSingleUploadArgs,
  { db }: Context
): Promise<File | null> => {
  try {
    const result = await uploader.singleFileUploadResolver(file)
    file.filename = result.awsFilename
    return await create(file, db)
  } catch (err) {
    console.log(`uploadFile::${err.message}`)
    throw new Error('Something went wrong')
  }
}

export default uploadFile
