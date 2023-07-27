import { categoryService } from '../../category/category.service'
import { Category, PurchaseInterest } from '../../graphql'
import { Context } from '../../interfaces/context'

const category = async (
  { categoryId }: PurchaseInterest,
  _: undefined,
  { db }: Context
): Promise<Category> => {
  try {
    return await categoryService.findUnique(db, categoryId)
  } catch (err) {
    console.log(`category: ${err.message}}`)
    throw new Error('Something went wrong')
  }
}

export default category
