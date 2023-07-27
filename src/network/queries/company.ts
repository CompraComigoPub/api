import { Context } from '../../interfaces/context'

import CompanyService from '../../company/company.service'
import { Company, NetworkCompany } from '../../graphql'

const company = async (
  { companyId }: NetworkCompany,
  _: undefined,
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
