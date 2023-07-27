import { Budget, MutationUpdateBudgetStatusArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import { sendMail } from '../../notifications/mail/sendMail'
import budgetService from '../budget.service'
import activityService from '../../notifications/activities/activies.service'
import { getCompaniesIdByNetworkAndRole } from '../../network/network-company.service'

const updateBudgetStatus = async (
  _: undefined,
  { status, budgetId }: MutationUpdateBudgetStatusArgs,
  { db, networkId }: Context
): Promise<Budget> => {
  try {
    const budget = await budgetService.updateBudgetStatus(db, budgetId, status)
    if (status === 'READY_FOR_BUYER') {
      sendMail({
        to: budget.order.company.users.map((user) => user.email),
        from: process.env.FIREBASE_SENDER_EMAIL,
        subject: 'Compra Comigo - Orçamento Recebido',
        templateId: 'd-a3cb22aa1ff9450ca0e1b2cf05e00172',
        dynamicTemplateData: {
          budgetLink: process.env.CLIENT_URL + '/orcamentos/' + budget.id,
        },
      })
      activityService.registerActivity(
        [budget.order.companyId],
        'Novo orcamento recebido',
        '/orcamentos/' + budget.id
      )
    } else if (status === 'READY_FOR_OPERATOR') {
      const operators = await getCompaniesIdByNetworkAndRole(db, networkId, [
        'OPERATOR',
      ])
      activityService.registerActivity(
        operators,
        'Orçamento esperando aprovação',
        '/orcamentos/' + budget.id
      )
    }

    return budget
  } catch (err) {
    console.debug('updateBudgetStatus:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

export default updateBudgetStatus
