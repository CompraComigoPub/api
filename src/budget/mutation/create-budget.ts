import { PrismaClient } from '@prisma/client'
import { Budget, BudgetInput, MutationCreateBudgetArgs } from '../../graphql'
import { Context } from '../../interfaces/context'
import activityService from '../../notifications/activities/activies.service'
import { sendMail } from '../../notifications/mail/sendMail'
import { isNullOrUndefined } from '../../utils/validation'

const createBudget = async (
  _: undefined,
  { budget }: MutationCreateBudgetArgs,
  { db }: Context
): Promise<Budget | null> => {
  try {
    if (budget.id && (await found(db, budget))) {
      throw new Error(
        `I found a budget with this id already: ${budget.id}. May you want to try a query instead of a mutation?`
      )
    }

    const data = {
      id: budget.id ?? undefined,
      maxDate: budget.maxDate && new Date(budget.maxDate),
      demand: {
        connect: {
          id: budget.demandId,
        },
      },
      order: {
        connect: {
          id: budget.orderId,
        },
      },
      status: 'READY_FOR_SELLER',
    }

    const newBudget = await db.budget.create({
      data: data,
      include: {
        demand: {
          include: { supplier: { include: { users: true } } },
        },
      },
    })

    sendMail({
      to: newBudget.demand.supplier.users.map((user) => user.email),
      from: process.env.FIREBASE_SENDER_EMAIL,
      subject: 'Compra Comigo - Orçamento recebido',
      templateId: 'd-a3cb22aa1ff9450ca0e1b2cf05e00172',
      dynamicTemplateData: {
        budgetLink: process.env.CLIENT_URL + '/orcamentos/' + newBudget.id,
      },
    })

    activityService.registerActivity(
      [newBudget.demand.supplierId],
      'Novo orçamento recebido',
      '/orcamentos/' + newBudget.id
    )

    return newBudget
  } catch (e) {
    throw new Error(`Something went wrong: ${e.message}`)
  }
}

const found = async (db: PrismaClient, budget: BudgetInput): Promise<boolean> =>
  !isNullOrUndefined(await db.budget.findUnique({ where: { id: budget.id } }))

export { createBudget }
