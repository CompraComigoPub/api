import { Company, MutationUpdateCompanyArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import CompanyService from '../company.service'

const deleteCompany = async (
  parent: undefined,
  { company }: MutationUpdateCompanyArgs,
  { db }: Context
): Promise<Company | null> => {
  try {
    return new CompanyService(db).update(company)
  } catch (e) {
    console.log(`deleteCompany: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default deleteCompany
