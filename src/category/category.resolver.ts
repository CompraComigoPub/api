import { Resolvers } from '../graphql'
import { createCategory, removeCategory, updateCategory } from './mutations'
import { category, categories, categoriesByNetwork } from './queries'
import getSubCategoriesByCategoryId from './queries/getSubCategoriesByCategoryId'

const resolvers: Resolvers = {
  Mutation: {
    createCategory,
    removeCategory,
    updateCategory,
  },
  Query: {
    category,
    categories,
    categoriesByNetwork,
    getSubCategoriesByCategoryId,
  },
}

export default resolvers
