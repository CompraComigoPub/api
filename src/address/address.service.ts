import { PrismaClient } from '@prisma/client'
import cep from 'cep-promise'
import { Address, CepAddress, CountRemove, InputAddress } from '../graphql'

const getByZipCode = async (
  zipcode: string
): Promise<CepAddress | Record<string, never>> => {
  const address = await cep(zipcode, {
    providers: ['brasilapi', 'correios', 'viacep', 'widenet'],
  })

  return address
}

const createAddress = async (
  address: InputAddress,
  db: PrismaClient
): Promise<Address> => {
  try {
    return await db.address.create({
      data: address,
    })
  } catch (err) {
    console.log(`AddressService-create::${err.message}`)
    throw new Error('Something went wrong')
  }
}

const findByCompanyId = async (
  companyId: string,
  db: PrismaClient
): Promise<Array<Address>> => {
  try {
    return db.address.findMany({ where: { companyId: companyId } })
  } catch (err) {
    console.log(`AddressService-findByCompany::${err.message}`)
    throw new Error(`Error: ${err.message}`)
  }
}

const removeByCompanyId = async (
  companyId: string,
  db: PrismaClient
): Promise<CountRemove> => {
  try {
    return db.address.deleteMany({ where: { companyId: companyId } })
  } catch (err) {
    console.log(`AddressService-removeByCompanyId::${err.message}`)
    throw new Error(`Error: ${err.message}`)
  }
}

const AddressService = {
  getByZipCode,
  createAddress,
  findByCompanyId,
  removeByCompanyId,
}

export default AddressService
