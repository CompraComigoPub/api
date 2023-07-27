import {
  Category,
  FieldType,
  PrismaClient,
  Product,
  User,
} from '@prisma/client'
import { products } from './seed-migrations/products'
import { categories } from './seed-migrations/categories'
import { companies } from './seed-migrations/companies'
import { users } from './seed-migrations/users'
import { networks } from './seed-migrations/networks'
import { Network } from '../../graphql'
import { fieldTypes } from './seed-migrations/fieldTypes'

const prisma = new PrismaClient()

async function createNetwork(network: Network) {
  return await prisma.network.create({
    data: {
      id: network.id,
      name: network.name,
    },
  })
}

async function createProduct(product: Product, categoryId: string) {
  await prisma.product.create({
    data: {
      id: product.id,
      sku: product.sku,
      name: product.name,
      photo: product.photo,
      description: product.description,
    },
  })
  await prisma.productCategory.create({
    data: {
      product: {
        connect: {
          id: product.id,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
  })
}

async function createCategory(category: Category, networks: Array<Network>) {
  await prisma.category.create({
    data: {
      id: category.id,
      label: category.label,
      parentCategory: category.parentId
        ? {
            connect: {
              id: category.parentId,
            },
          }
        : undefined,
    },
  })

  await Promise.all(
    networks.map(async (network) => {
      await prisma.networkCategory.create({
        data: {
          network: {
            connect: {
              id: network.id,
            },
          },
          category: {
            connect: {
              id: category.id,
            },
          },
        },
      })
    })
  )
}

async function createCompany(company) {
  const newCompany = await prisma.company.create({
    data: {
      id: company.info.id,
      name: company.info.name,
      tradeName: company.info.tradeName,
      logo: company.info.logo,
      cnpj: company.info.cnpj,
    },
  })

  await prisma.address.create({
    data: {
      ...company.address,
      companyId: company.info.id,
    },
  })

  await prisma.networkCompany.create({
    data: {
      company: {
        connect: {
          id: newCompany.id,
        },
      },
      network: {
        connect: {
          id: company.networkId,
        },
      },
      status: 'VALID',
      role: company.role,
    },
  })
}

async function createUser(user: User) {
  await prisma.user.create({
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
      cpf: user.cpf,
      role: user.role,
      company: {
        connect: {
          id: user.companyId,
        },
      },
    },
  })
}

async function createFieldType(type: FieldType) {
  await prisma.fieldType.create({
    data: type,
  })
}

async function main() {
  await Promise.all(
    networks.map(async (network) => {
      await createNetwork(network)
    })
  )

  await Promise.all(
    categories.map(async (category) => {
      await createCategory(category, networks)
    })
  )

  await Promise.all(
    products.map(async (product) => {
      await createProduct(product, product.categoryId)
    })
  )

  await Promise.all(
    fieldTypes.map(async (field) => {
      await createFieldType(field)
    })
  )

  await Promise.all(
    companies.map(async (company) => {
      await createCompany(company)
    })
  )

  await Promise.all(
    users.map(async (user) => {
      await createUser(user)
    })
  )
}
console.log('Runnig seed!')
main()
  .then(() => console.log('process finished with success'))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
