import { IResolvers } from 'graphql-tools'

import addressByZipCode from './queries/address-by-zip-code'
import addressByCompany from './queries/address-by-company'
import createAddress from './mutation/create-address'

const addressResolver: IResolvers = {
  Query: {
    addressByZipCode,
    addressByCompany,
  },
  Mutation: {
    createAddress,
  },
  Address: {},
}

export default addressResolver
