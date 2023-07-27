import { Resolvers } from '../../graphql'
import addViewerInActivity from './mutation/add-viewer-in-activity'
import getActivities from './queries/getActivities'
import visualized from './queries/visualized'

const resolvers: Resolvers = {
  Mutation: {
    addViewerInActivity,
  },
  Query: {
    getActivities,
  },
  Activity: {
    visualized,
  },
}

export default resolvers
