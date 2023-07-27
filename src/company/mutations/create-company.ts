import { ForbiddenError, UserInputError } from 'apollo-server'
import AddressService from '../../address/address.service'
import { createFirebaseUser } from '../../firebase/auth'
import {
  CreateCompanyMutationResponse,
  MutationCreateCompanyArgs,
} from '../../graphql'
import { Context } from '../../interfaces/context'
import { createNetworkCompany } from '../../network/network-company.service'
import UserService from '../../user/user.service'
import { validateToken } from '../../utils/validation'
import CompanyService from '../company.service'

const createCompany = async (
  parent: undefined,
  { company, address, networkId, role, user, token }: MutationCreateCompanyArgs,
  { db }: Context
): Promise<CreateCompanyMutationResponse | null> => {
  if (!validateToken(token)) throw new ForbiddenError(`Permission denied`)

  const companyService = new CompanyService(db)
  const userService = new UserService(db)

  const oldCompany = await companyService.findByCnpj(company.cnpj)
  if (oldCompany) throw new Error(`Company already exists`)

  const oldUser = await userService.findByEmail(user.email)
  if (oldUser) throw new UserInputError(`User already exists`)

  try {
    const newCompany = await companyService.create(company)
    await AddressService.createAddress(
      {
        city: address.city,
        companyId: newCompany.id,
        complement: address.complement,
        state: address.state,
        street: address.street,
        zipcode: address.zipcode,
        numericIndentifier: address.numericIndentifier,
        neighborhood: address.neighborhood,
      },
      db
    )
    await createNetworkCompany(db, newCompany.id, networkId, role)

    const firebaseUser = await createFirebaseUser(user)
    user.firebaseId = firebaseUser.uid
    user.companyId = newCompany.id
    user.role = 'OWNER'

    await userService.create(user)

    return {
      code: '200',
      success: true,
      message: 'Company created successfully',
      company: newCompany,
    }
  } catch (error) {
    const newCompany = await companyService.findByCnpj(company.cnpj)
    if (newCompany) {
      await companyService.removeCompanyAtrributes(newCompany.id)
      await companyService.remove({ id: newCompany.id })
    }

    throw new Error(`Something went wrong ${error.message}`)
  }
}

export default createCompany
