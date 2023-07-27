import {
  MutationAppendCompanyToNetworkArgs,
  NetworkCompany,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import { RecordNotFoundError } from '../../utils/errors'
import { createNetworkCompany, exists } from '../network-company.service'
import { exists as existsNetwork } from '../network-service'

const appendCompanyToNetwork = async (
  _: undefined,
  { companyId, networkId, role }: MutationAppendCompanyToNetworkArgs,
  { db }: Context
): Promise<NetworkCompany> => {
  if (!(await existsNetwork(db, networkId))) {
    throw new RecordNotFoundError(`Network: ${networkId} `)
  }

  if (await exists(db, companyId, networkId)) {
    throw new Error(`I found this association already`)
  }

  return createNetworkCompany(db, companyId, networkId, role)
}

export { appendCompanyToNetwork }
