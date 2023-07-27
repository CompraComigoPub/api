import { Resolvers } from '../graphql'
// import {
//   appendAttributeToProduct,
//   removeAttributeFromProduct,
// } from '../../product-attribute/mutations'

import attribute from './queries/attribute'

const resolvers: Resolvers = {
  // Mutation: {
  //   appendAttributeToProduct,
  //   removeAttributeFromProduct,
  // },
  ProductAttribute: {
    attribute,
  },
}

export default resolvers
