import { User } from '@prisma/client'
import { Activity } from '../../graphql'
import activityService from '../../notifications/activities/activies.service'

const activities = async ({ companyId }: User): Promise<Array<Activity>> => {
  try {
    return await activityService.getActivitiesByCompany(companyId)
  } catch (err) {
    console.log(`activities: ${err.message}}`)
    throw new Error('Something went wrong')
  }
}

export default activities
