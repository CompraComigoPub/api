import { Company, QueryCompanyByCnpjArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import CompanyService from '../company.service'

const companyByCnpj = async (
  parent: undefined,
  { cnpj }: QueryCompanyByCnpjArgs,
  { db }: Context
): Promise<Company | null> => {
  try {
    return new CompanyService(db).findByCnpj(cnpj)
  } catch (e) {
    console.log(`companies: ${e.message}`)
    throw new Error('Something went wrong')
  }
}

export default companyByCnpj
