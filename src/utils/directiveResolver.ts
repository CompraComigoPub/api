import { NextResolverFn } from 'apollo-server'
import { AuthenticationError, ForbiddenError } from 'apollo-server-express'
import { Context } from '../interfaces/context'

const directiveResolvers = {
  isAuthenticated: async (
    next: NextResolverFn,
    source: undefined,
    args: undefined,
    context: Context
  ) => {
    if (!context.user) throw new AuthenticationError('You must be logged in')
    return next()
  },
  isOperator: async (
    next: NextResolverFn,
    source: undefined,
    args: undefined,
    context: Context
  ) => {
    if (context.roleCompany !== 'OPERATOR')
      throw new ForbiddenError('Permission Denied')
    return next()
  },
}

export default directiveResolvers
