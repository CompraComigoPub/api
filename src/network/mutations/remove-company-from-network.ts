import {
  MutationAppendCompanyToNetworkArgs,
  NetworkCompany,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import { RecordNotFoundError } from '../../utils/errors'
import { exists } from '../network-company.service'

const removeCompanyFromNetwork = async (
  _: undefined,
  { companyId, networkId }: MutationAppendCompanyToNetworkArgs,
  { db }: Context
): Promise<NetworkCompany> => {
  try {
    if (!(await exists(db, companyId, networkId))) {
      throw new RecordNotFoundError(
        `companyId: ${companyId}  and networkId: ${networkId}`
      )
    }

    return await db.networkCompany.delete({
      where: { networkId_companyId: { companyId, networkId } },
    })
  } catch (e) {
    throw new Error(e.message)
  }
}

export { removeCompanyFromNetwork }
