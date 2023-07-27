import {
  appendAttributeToCategory,
  removeAttributeFromCategory,
} from './mutations'
import { Resolvers } from '../graphql'

const resolvers: Resolvers = {
  Mutation: {
    appendAttributeToCategory,
    removeAttributeFromCategory,
  },
}

export default resolvers
