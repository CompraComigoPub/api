import { File, QueryFilesByOrderArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { findByOrder } from '../file.service'

const filesByOrder = async (
  _: unknown,
  { orderId }: QueryFilesByOrderArgs,
  { db }: Context
): Promise<Array<File> | null> => {
  return findByOrder(orderId, db)
}

export default filesByOrder
