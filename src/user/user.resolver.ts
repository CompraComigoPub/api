import { IResolvers } from 'graphql-tools'

import user from './queries/user'
import userByFirebaseId from './queries/user-by-firebaseId'

import company from './queries/company'

import createUser from './mutations/create-user'
import updateUser from './mutations/update-user'
import removeUser from './mutations/remove-user'
import updatePassword from './mutations/update-password'
import generateInviteCompanyToken from './mutations/generate-invite-companyToken'
import decodeInviteCompanyToken from './queries/decode-inviteCompanyToken'
import decodeInviteUserToken from './queries/decode-inviteUserToken'
import generateInviteUserToken from './mutations/generate-invite-userToken'
import usersByCompany from './queries/usersByCompany'
import sendEmailWithUserInfo from './mutations/sendEmailWithUserInfo'
import activities from './queries/activities'

const userResolver: IResolvers = {
  Query: {
    user,
    // users,
    userByFirebaseId,
    decodeInviteCompanyToken,
    decodeInviteUserToken,
    usersByCompany,
  },
  Mutation: {
    createUser,
    updateUser,
    removeUser,
    updatePassword,
    generateInviteCompanyToken,
    generateInviteUserToken,
    sendEmailWithUserInfo,
  },
  User: {
    company,
    activities,
  },
}

export default userResolver
