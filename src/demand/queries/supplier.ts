import { isNullOrUndefined } from '../../utils/validation'
import { Context } from '../../interfaces/context'
import { Demand } from '@prisma/client'
import CompanyService from '../../company/company.service'
import { Company } from '../../graphql'

const supplier = async (
  { supplierId }: Demand,
  args: undefined,
  { db }: Context
): Promise<Company | null> => {
  try {
    return await new CompanyService(db).find(supplierId)
  } catch (e) {
    throw new Error(`Something went wrong ${e.message}`)
  }
}

export default supplier
