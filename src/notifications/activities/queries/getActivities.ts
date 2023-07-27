import { Context } from '../../../interfaces/context'
import activiesService from '../activies.service'

const getActivities = async (
  _: undefined,
  args: undefined,
  { user }: Context
) => {
  try {
    return await activiesService.getActivitiesByCompany(user.companyId)
  } catch (err) {
    console.debug(`error while trying to get activities : ${err.message}`)
  }
}

export default getActivities
