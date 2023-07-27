import { MutationAddViewerInActivityArgs } from '../../../graphql'
import { Context } from '../../../interfaces/context'
import activiesService from '../activies.service'

const addViewerInActivity = async (
  _: undefined,
  { docsId }: MutationAddViewerInActivityArgs,
  { user }: Context
) => {
  try {
    await activiesService.addViewer(user.companyId, docsId)
    return true
  } catch (err) {
    console.debug(
      `error while trying to add new viewer in a activity : ${err.message}`
    )
    throw new Error('Something went Wrong')
  }
}

export default addViewerInActivity
