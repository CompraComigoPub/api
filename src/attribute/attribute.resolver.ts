import { Resolvers } from '../graphql'
import { createAttribute, removeAttribute, updateAttribute } from './mutations'
import { attribute, attributes } from './queries'

const resolvers: Resolvers = {
  Mutation: {
    createAttribute,
    updateAttribute,
    removeAttribute,
  },
  Query: {
    attribute,
    attributes,
  },
}

export default resolvers
