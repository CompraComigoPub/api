import { PrismaClient } from '@prisma/client'
import { isNullOrUndefined, isUUID } from '../utils/validation'
import {
  Company,
  CompanyCreateInput,
  CompanyRemoveInput,
  CompanyUpdateInput,
} from '../graphql'
import addressService from '../address/address.service'
import { removeByCompanyId } from '../network/network-company.service'

class CompanyService {
  constructor(private readonly db: PrismaClient) {}

  async find(id: string): Promise<Company | null> {
    if (!isUUID(id)) {
      throw new Error('Company ID must be a valid UUID!')
    }
    return this.db.company.findUnique({
      where: {
        id: id,
      },
    })
  }

  async findByCnpj(cnpj: string): Promise<Company | null> {
    return this.db.company.findFirst({
      where: {
        cnpj,
      },
    })
  }

  async findAll(): Promise<Array<Company> | null> {
    return this.db.company.findMany()
  }

  async create(company: CompanyCreateInput): Promise<Company> {
    try {
      if (company.id && isNullOrUndefined(company.id)) {
        throw new Error('Company ID must be a valid UUID!')
      }

      if (company.id && !isNullOrUndefined(await this.find(company.id))) {
        throw new Error(`I found a company with id: ${company.id}`)
      }

      return await this.db.company.create({
        data: company,
      })
    } catch (e) {
      console.log('CompanyService::create', e.message)
      throw new Error(`Something went Wrong ${e.message}`)
    }
  }

  async update(company: CompanyUpdateInput): Promise<Company> {
    if (!isUUID(company.id)) {
      throw new Error('Company ID must be a valid UUID')
    }
    return await this.db.company.update({
      where: {
        id: company.id,
      },
      data: company,
    })
  }

  async remove(company: CompanyRemoveInput): Promise<Company | null> {
    if (!isUUID(company.id)) {
      throw new Error('Company ID must be a valid UUID')
    }

    return await this.db.company.delete({
      where: {
        id: company.id,
      },
    })
  }

  async removeCompanyAtrributes(companyId: string): Promise<void> {
    await addressService.removeByCompanyId(companyId, this.db)
    await removeByCompanyId(this.db, companyId)
  }
}

export default CompanyService
