import express from 'express'
import cors from 'cors'
import path from 'path'
import { ApolloServer } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { graphqlUploadExpress } from 'graphql-upload'
import getUser from './utils/context/getUser'
import getUserRole from './utils/context/getUserRole'
import getNetworkId from './utils/context/getNetworkId'
import { makeExecutableSchema } from 'apollo-server'
import directiveResolvers from './utils/directiveResolver'

const db = new PrismaClient()
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, './**/*.resolver.*'))
)

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, '../**/*.graphql'))
)

const context = async ({ req }) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(' ')[1]

    const user = await getUser(token, db)
    const networkId = await getNetworkId(user, db)
    const { roleCompany, status } = await getUserRole(user, networkId, db)

    return { db, user, networkId, roleCompany, status }
  } catch (error) {
    console.log(error)
    return null
  }
}

const mockEntireSchema = !!parseInt(process.env.MOCK_ENTIRE_SCHEMA)
if (mockEntireSchema) {
  console.log(`ALERT: Mocking all schema: ${mockEntireSchema}`)
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers,
})

const server = new ApolloServer({
  schema,
  context,
  uploads: false,
  playground: false,
  introspection: true,
})

const app = express()
app.use(cors())
app.use(graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 10 }))

server.applyMiddleware({ app, path: '/api' })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/api`)
})

export default app
