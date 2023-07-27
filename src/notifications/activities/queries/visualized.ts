import { Activity } from '../../../graphql'
import { Context } from '../../../interfaces/context'

const visualized = (
  { viewersId }: Activity,
  _: undefined,
  { user }: Context
) => {
  try {
    return viewersId?.includes(user.companyId)
  } catch (err) {
    console.log(`visualized: ${err.message}}`)
    throw new Error('Something went wrong')
  }
}

export default visualized
