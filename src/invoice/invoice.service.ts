import { Invoice, InvoiceItem, PrismaClient } from '@prisma/client'
import {
  CreateInvoiceInput,
  CreateInvoiceItemInput,
  InvoiceFilter,
  InvoicePagination,
  Pagination,
} from '../graphql'
import { getPagination } from '../utils/db'

const find = async (db: PrismaClient, id: string): Promise<Invoice> => {
  try {
    return await db.invoice.findUnique({ where: { id } })
  } catch (err) {
    console.error('createInvoice: ', err.message)
    throw new Error(`Something went wrong: ${err.message}`)
  }
}

const createInvoice = async (
  db: PrismaClient,
  invoiceInput: CreateInvoiceInput
): Promise<Invoice> => {
  try {
    const invoice = await db.invoice.create({
      data: {
        budget: {
          connect: {
            id: invoiceInput.budgetId,
          },
        },
        homologation: invoiceInput.homologation,
        status: 'UNDER_EVALUATION',
      },
    })

    invoiceInput.items.forEach(async (item) => {
      await createInvoiceItem(db, item, invoice.id)
    })

    return invoice
  } catch (err) {
    console.error('createInvoice: ', err.message)
    throw new Error(`Something went wrong: ${err.message}`)
  }
}

const createInvoiceItem = async (
  db: PrismaClient,
  invoiceItem: CreateInvoiceItemInput,
  invoiceId: string
): Promise<InvoiceItem> => {
  try {
    return db.invoiceItem.create({
      data: {
        price: invoiceItem.price,
        quantity: invoiceItem.quantity,
        invoice: {
          connect: {
            id: invoiceId,
          },
        },
        product: {
          connect: {
            id: invoiceItem.productId,
          },
        },
      },
    })
  } catch (err) {
    console.error('createInvoiceItem: ', err.message)
    throw new Error(`Something went wrong: ${err.message}`)
  }
}

const findPagination = async (
  db: PrismaClient,
  pagination: Pagination,
  filter: InvoiceFilter,
  networkId: string
): Promise<InvoicePagination> => {
  try {
    const invoices = await db.invoice.findMany({
      ...getPagination(pagination),
      where: {
        budget: {
          demand: {
            networkId,
          },
          order: {
            purchaseInterest: {
              title: {
                contains: filter?.title || '',
                mode: 'insensitive',
              },
            },
          },
        },
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
      },
    })
    const total = await db.invoice.count({
      where: {
        budget: {
          demand: {
            networkId,
          },
          order: {
            purchaseInterest: {
              title: {
                contains: filter?.title || '',
                mode: 'insensitive',
              },
            },
          },
        },
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
      },
    })
    return {
      invoices,
      total,
    }
  } catch (err) {
    console.error('findPagination: ', err.message)
    throw new Error(`Something went wrong: ${err.message}`)
  }
}

const findBySellerPagination = async (
  db: PrismaClient,
  pagination: Pagination,
  filter: InvoiceFilter,
  supplierId: string,
  networkId: string
): Promise<InvoicePagination> => {
  try {
    const invoices = await db.invoice.findMany({
      ...getPagination(pagination),
      where: {
        budget: {
          demand: {
            supplierId,
            networkId,
          },
          order: {
            purchaseInterest: {
              title: {
                contains: filter?.title || '',
                mode: 'insensitive',
              },
            },
          },
        },
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
      },
    })

    const total = await db.invoice.count({
      where: {
        budget: {
          demand: {
            supplierId,
            networkId,
          },
          order: {
            purchaseInterest: {
              title: {
                contains: filter?.title || '',
                mode: 'insensitive',
              },
            },
          },
        },
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
      },
    })

    return { invoices, total }
  } catch (err) {
    console.error('findBySeller: ', err.message)
    throw new Error(`Something went wrong: ${err.message}`)
  }
}

const findByBuyerPagination = async (
  db: PrismaClient,
  pagination: Pagination,
  filter: InvoiceFilter,
  buyerId: string,
  networkId: string
): Promise<InvoicePagination> => {
  try {
    const invoices = await db.invoice.findMany({
      ...getPagination(pagination),
      where: {
        budget: {
          order: {
            companyId: buyerId,
            networkId,
            purchaseInterest: {
              title: {
                contains: filter?.title || '',
                mode: 'insensitive',
              },
            },
          },
        },
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
      },
    })

    const total = await db.invoice.count({
      where: {
        budget: {
          order: {
            companyId: buyerId,
            networkId,
            purchaseInterest: {
              title: {
                contains: filter?.title || '',
                mode: 'insensitive',
              },
            },
          },
        },
        status: {
          contains: filter?.status || '',
          mode: 'insensitive',
        },
      },
    })

    return { invoices, total }
  } catch (err) {
    console.error('findByBuyer: ', err.message)
    throw new Error(`Something went wrong: ${err.message}`)
  }
}

const invoiceService = {
  createInvoice,
  createInvoiceItem,
  findBySellerPagination,
  findByBuyerPagination,
  findPagination,
  find,
}

export default invoiceService
