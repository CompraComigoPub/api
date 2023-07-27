import { GraphQLUpload } from 'apollo-server-express'
import uploadFile from './mutation/uploadFile'
import filesByOrder from './query/filesByOrder'
import uploadImage from './mutation/uploadImage'
import { Resolvers } from '../graphql'
import { Uploader } from '../utils/uploader'

const uploader = new Uploader({
  accessKeyId: String(process.env.AWS_ACCESS_KEY),
  secretAccessKey: String(process.env.AWS_SECRET),
  destinationBucketName: String(process.env.AWS_uploader_BUCKET),
  region: String(process.env.DEFAULT_REGION),
})

const resolvers: Resolvers = {
  FileUpload: GraphQLUpload,
  Mutation: {
    singleUpload: uploadFile,
    multipleUploads: uploader.multipleUploadsResolver.bind(uploader),
    uploadImage,
  },
  Query: {
    filesByOrder: filesByOrder,
  },
  File: {
    url: uploader.getUrl.bind(uploader),
  },
}

export default resolvers
