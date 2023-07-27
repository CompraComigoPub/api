import { IResolvers } from 'graphql-tools'

import company from './queries/company'
import companyByCnpj from './queries/company-by-cnpj'
import companies from './queries/companies'
import orders from './queries/orders'
import users from './queries/users'

import createCompany from './mutations/create-company'
import updateCompany from './mutations/update-company'
import attachUserToCompany from './mutations/attach-user-to-company'
import detachUserFromCompany from './mutations/detach-user-from-company'
import addresses from './queries/addresses'
import role from './queries/role'

const companyResolver: IResolvers = {
  Query: {
    company,
    companyByCnpj,
    companies,
  },
  Mutation: {
    createCompany,
    updateCompany,
    attachUserToCompany,
    detachUserFromCompany,
  },
  Company: {
    users,
    orders,
    addresses,
    role,
  },
}

export default companyResolver
