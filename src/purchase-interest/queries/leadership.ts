import { PurchaseInterest, Company, QueryCategoryArgs } from '../../graphql'
import { Context } from '../../interfaces/context'

import CompanyService from '../../company/company.service'

const leadership = async (
  { leadershipId }: PurchaseInterest,
  _: QueryCategoryArgs,
  { db }: Context
): Promise<Company | null> => {
  try {
    return new CompanyService(db).find(leadershipId)
  } catch (e) {
    console.log(`leadership: ${e.message}}`)
    throw new Error('Something went wrong')
  }
}

export default leadership
