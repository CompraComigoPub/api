import { DemandItem } from '../../graphql'

const totalPrice = async (demandItem: DemandItem) => {
  try {
    return demandItem.price ? demandItem?.price * demandItem.quantity : 0
  } catch (e) {
    console.log(`totalPrice: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default totalPrice
