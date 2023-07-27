import { MutationUploadImageArgs, UploadImageResponse } from '../../graphql'
import { Uploader } from '../../utils/uploader'

const uploader = new Uploader({
  accessKeyId: String(process.env.AWS_ACCESS_KEY),
  secretAccessKey: String(process.env.AWS_SECRET),
  destinationBucketName: String(process.env.AWS_S3_BUCKET_IMAGES),
  region: String(process.env.DEFAULT_REGION),
})

const uploadImage = async (
  _: undefined,
  { file: { file } }: MutationUploadImageArgs
): Promise<UploadImageResponse> => {
  try {
    const result = await uploader.singleFileUploadResolver(file)
    return { url: result.url }
  } catch (error) {
    console.log(`uploadImageProfile::${error.message}`)
    throw new Error('Something went wrong')
  }
}

export default uploadImage
