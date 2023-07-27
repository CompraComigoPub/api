import { Budget } from '../../graphql'
import { Context } from '../../interfaces/context'

const statusText = (
  { status }: Budget,
  _: undefined,
  { roleCompany }: Context
): string => {
  try {
    switch (status) {
      case 'APPROVED':
        return 'Aprovado'
      case 'READY_FOR_BUYER':
        if (roleCompany === 'BUYER') return 'Pendente'
        return 'Em análise pelo comprador'
      case 'READY_FOR_SELLER':
        if (roleCompany === 'OPERATOR') return 'Em análise pelo vendedor'
        if (roleCompany === 'SELLER') return 'Pendente'
        return 'Em análise'
      case 'READY_FOR_OPERATOR':
        if (roleCompany === 'OPERATOR') return 'Pendente'
        return 'Em análise'
      case 'REPROVED_BY_SELLER':
        if (roleCompany === 'OPERATOR') return 'Não aceito pelo vendedor'
        return 'Reprovado'
      case 'REPROVED_BY_BUYER':
        if (roleCompany === 'OPERATOR') return 'Reprovado pelo comprador'
        return 'Reprovado'
      case 'REPROVED_BY_OPERATOR':
        return 'Reprovado'
      default:
        return 'Sem status válido'
    }
  } catch (err) {
    console.debug('statusText:: ', err.message)
    throw new Error(`Something went Wrong ${err.message}`)
  }
}

export default statusText
