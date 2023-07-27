import { MutationUpdateNetworkStatusArgs, NetworkCompany } from '../../graphql'
import { Context } from '../../interfaces/context'
import { sendMail } from '../../notifications/mail/sendMail'
import {
  getCompaniesIdByNetworkAndRole,
  updateStatus,
} from '../network-company.service'
import activityService from '../../notifications/activities/activies.service'

const updateNetworkStatus = async (
  args: undefined,
  { companyId, status, description }: MutationUpdateNetworkStatusArgs,
  { db, networkId }: Context
): Promise<NetworkCompany> => {
  try {
    const networkCompany = await updateStatus(db, companyId, networkId, status)

    sendMail({
      to: networkCompany.company.users.map((user) => user.email),
      from: process.env.FIREBASE_SENDER_EMAIL,
      subject: 'Compra Comigo - Solicitação de cadastro',
      templateId:
        status === 'VALID'
          ? 'd-e4d63224ef1f47d391932584dc4b28b4'
          : 'd-0e8a204489e241638659df60c19ce3c2',
      dynamicTemplateData: {
        networkName: networkCompany.network.name,
        description,
      },
    })

    if (status === 'VALID' && networkCompany.role === 'BUYER') {
      const companiesId = await getCompaniesIdByNetworkAndRole(db, networkId, [
        'BUYER',
      ])
      activityService.registerActivity(
        companiesId,
        `Nova empresa na rede`,
        '/minha-rede'
      )
    }

    return networkCompany
  } catch (err) {
    console.debug(`updateNetworkStatus: ${err.message}`)
    throw new Error('Something went Wrong')
  }
}

export default updateNetworkStatus
