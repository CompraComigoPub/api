import { Context } from '../../interfaces/context'
import { categoryService } from '../category.service'

const categoriesByNetwork = async (
  _: undefined,
  args: undefined,
  { networkId, db }: Context
) => {
  try {
    return await categoryService.findCategoriesByNetwork(db, networkId)
  } catch (err) {
    console.debug(`categoriesByNetwork: ${err.message}`)
    throw new Error('Something went Wrong')
  }
}

export default categoriesByNetwork
