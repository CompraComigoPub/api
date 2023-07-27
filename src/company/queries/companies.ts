import { Company } from '../../graphql'
import { Context } from '../../interfaces/context'
import CompanyService from '../company.service'

const companies = async (
  parent: undefined,
  args: undefined,
  { db }: Context
): Promise<Array<Company> | null> => {
  try {
    return new CompanyService(db).findAll()
  } catch (e) {
    console.log(`companies: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default companies
