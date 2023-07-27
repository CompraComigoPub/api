import { PrismaClient } from '@prisma/client'
import {
  AddUserInput,
  AddUserOwnerInput,
  FilterUser,
  Pagination,
  RemoveUserInput,
  UpdateUserInput,
  User,
  UsersPaginated,
} from '../graphql'
import { getPagination } from '../utils/db'

class UserService {
  constructor(private readonly db: PrismaClient) {}

  async create(user: AddUserInput | AddUserOwnerInput): Promise<User | null> {
    try {
      return await this.db.user.create({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          inviterId: user.inviterId,
          invitedId: user.invitedId,
          firebaseId: user.firebaseId,
          photo: user.photo,
          phone: user.phone,
          position: user.position,
          role: user.role,
          cpf: user.cpf,
          company: {
            connect: {
              id: user.companyId,
            },
          },
        },
      })
    } catch (e) {
      console.log('UserService::create: ', e.message)
      throw new Error(
        `Error when trying to create user in database with email ${user.email}`
      )
    }
  }

  async find(id: string): Promise<User | null> {
    try {
      return (
        id &&
        this.db.user.findUnique({
          where: { id },
        })
      )
    } catch (e) {
      console.log('user update: ', e.message)
      throw new Error('Something went Wrong!')
    }
  }

  async findByCompany(companyId: string): Promise<Array<User> | null> {
    return this.db.user.findMany({
      where: {
        companyId,
      },
    })
  }

  async findByCompanyPaginated(
    companyId: string,
    pagination: Pagination,
    filter: FilterUser
  ): Promise<UsersPaginated> {
    try {
      const payload = await this.db.user.findMany({
        ...getPagination(pagination),
        where: {
          companyId,
          name: {
            contains: filter?.name || '',
            mode: 'insensitive',
          },
        },
      })

      const total = await this.db.user.count({
        ...getPagination(pagination),
        where: {
          companyId,
          name: {
            contains: filter?.name || '',
            mode: 'insensitive',
          },
        },
      })

      return {
        payload,
        total,
      }
    } catch (e) {
      console.log('user findByCompanyPaginated: ', e.message)
      throw new Error('Something went Wrong!')
    }
  }

  async findByFirebaseId(firebaseId: string): Promise<User | null> {
    return (
      firebaseId &&
      this.db.user.findFirst({
        where: {
          firebaseId,
        },
      })
    )
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      return await this.db.user.findFirst({
        where: { email },
      })
    } catch (e) {
      console.log('user findByEmail: ', e.message)
      throw new Error('Something went Wrong!')
    }
  }

  async findAll(): Promise<Array<User> | null> {
    try {
      return await this.db.user.findMany()
    } catch (e) {
      console.log('user update: ', e.message)
      throw new Error('Something went Wrong!')
    }
  }

  async update(user: UpdateUserInput): Promise<User | null> {
    try {
      return await this.db.user.update({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          inviterId: user.inviterId,
          invitedId: user.invitedId,
          firebaseId: user.firebaseId,
          role: user.role,
          photo: user.photo,
          phone: user.phone,
          position: user.position,
          cpf: user.cpf,
          company: {
            connect: {
              id: user.companyId,
            },
          },
        },
        where: {
          id: user.id,
        },
      })
    } catch (e) {
      console.log('user update: ', e.message)
      throw new Error('Something went Wrong!')
    }
  }

  async remove(user: RemoveUserInput): Promise<User | null> {
    try {
      return this.db.user.delete({ where: { id: user.id } })
    } catch (e) {
      console.log('user delete', e.message)
      throw new Error('Something went Wrong!')
    }
  }
}

export default UserService
