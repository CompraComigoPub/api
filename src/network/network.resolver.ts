import { Resolvers } from '../graphql'
import {
  createNetwork,
  removeNetwork,
  updateNetwork,
  appendCompanyToNetwork,
  removeCompanyFromNetwork,
} from './mutations'
import updateNetworkStatus from './mutations/update-networkStatus'
import {
  networks,
  network,
  allCompaniesByNetwork,
  buyerCompaniesByNetwork,
} from './queries'
import company from './queries/company'
import sellerCompanies from './queries/sellerCompanies'

const resolvers: Resolvers = {
  Mutation: {
    createNetwork,
    removeNetwork,
    updateNetwork,
    // appendCompanyToNetwork,
    // removeCompanyFromNetwork,
    updateNetworkStatus,
  },
  Query: {
    network,
    networks,
    allCompaniesByNetwork,
    sellerCompanies,
    buyerCompaniesByNetwork,
  },
  NetworkCompany: {
    company,
  },
}

export default resolvers
