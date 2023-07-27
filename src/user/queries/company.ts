import { User, Company, QueryCategoryArgs } from '../../graphql'
import { Context } from '../../interfaces/context'

import CompanyService from '../../company/company.service'

const company = async (
  { companyId }: User,
  _: QueryCategoryArgs,
  { db }: Context
): Promise<Company | null> => {
  try {
    return new CompanyService(db).find(companyId)
  } catch (e) {
    console.log(`company: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default company
