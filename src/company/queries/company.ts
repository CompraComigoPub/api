import { AuthenticationError } from 'apollo-server'
import { Company, QueryCompanyArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import CompanyService from '../company.service'

const company = async (
  parent: undefined,
  { id }: QueryCompanyArgs,
  { db }: Context
): Promise<Company | null> => {
  try {
    return new CompanyService(db).find(id)
  } catch (e) {
    console.log(`company: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default company
