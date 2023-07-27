import { findByOrder } from '../../file/file.service'
import { File } from '../../graphql'
import { Context } from '../../interfaces/context'

const files = async (
  { id },
  args: unknown,
  { db }: Context
): Promise<Array<File>> => {
  try {
    return findByOrder(id, db)
  } catch (err) {
    console.log(`files: ${err.message}}`)
    throw new Error('Something went wrong')
  }
}

export default files
