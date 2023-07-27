import AWS from 'aws-sdk'
import stream from 'stream'
import { ReadStream } from 'fs'
import { uuid } from 'uuidv4'

type S3UploadConfig = {
  accessKeyId: string
  secretAccessKey: string
  destinationBucketName: string
  region: string
}

type S3UploadStream = {
  writeStream: stream.PassThrough
  promise: Promise<AWS.S3.ManagedUpload.SendData>
}

export type File = {
  filename: string
  mimetype: string
  encoding: string
  createReadStream(): ReadStream
}

type UploadedFileResponse = {
  awsFilename: string
  mimetype: string
  encoding: string
  url: string
}

interface IUploader {
  singleFileUploadResolver: (
    _: unknown,
    { file }: { file: File }
  ) => Promise<UploadedFileResponse>
  multipleUploadsResolver: (
    _: unknown,
    { files }: { files: File[] }
  ) => Promise<UploadedFileResponse[]>
}

export class Uploader implements IUploader {
  private s3: AWS.S3
  public config: S3UploadConfig

  constructor(config: S3UploadConfig) {
    AWS.config = new AWS.Config()
    AWS.config.update({
      region: config.region,
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    })

    this.s3 = new AWS.S3()
    this.config = config
  }

  private createUploadStream(key: string): S3UploadStream {
    const pass = new stream.PassThrough()
    return {
      writeStream: pass,
      promise: this.s3
        .upload({
          Bucket: this.config.destinationBucketName,
          Key: key,
          Body: pass,
        })
        .promise(),
    }
  }

  private createDestinationFilePath(
    fileName: string,
    mimetype: string,
    encoding: string
  ): string {
    return fileName
  }

  async singleFileUploadResolver(file: File): Promise<UploadedFileResponse> {
    const { filename, mimetype, encoding, createReadStream } = file
    const awsFilename = uuid() + filename

    const filePath = this.createDestinationFilePath(
      awsFilename,
      mimetype,
      encoding
    )
    const uploadStream = this.createUploadStream(filePath)

    createReadStream().pipe(uploadStream.writeStream)
    const result = await uploadStream.promise

    return { awsFilename, mimetype, encoding, url: result.Location }
  }

  async multipleUploadsResolver(
    _: unknown,
    { files }: { files: File[] }
  ): Promise<UploadedFileResponse[]> {
    return Promise.all(files.map((f) => this.singleFileUploadResolver(f)))
  }

  getUrl = async ({ filename }): Promise<string> => {
    const signedUrlExpireSeconds = 600
    const url = await this.s3.getSignedUrl('getObject', {
      Bucket: process.env.AWS_S3_BUCKET_FILES,
      Key: filename,
      Expires: signedUrlExpireSeconds,
    })
    return url
  }
}
