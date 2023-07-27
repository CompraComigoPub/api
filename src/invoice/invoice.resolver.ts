import { IResolvers } from 'graphql-tools'

import invoice from './queries/invoice'
import invoiceItems from './queries/invoice-items'

import createInvoice from './mutations/create-invoice'
import removeItemFromInvoice from './mutations/remove-item-from-invoice'

import product from '../product/queries/product'
import invoicesBySeller from './queries/invoicesBySeller'
import invoicesByBuyer from './queries/invoicesByBuyer'
import invoicesPagination from './queries/invoicesPagination'
import budget from './queries/budget'

const resolvers: IResolvers = {
  Mutation: {
    createInvoice,
    removeItemFromInvoice,
  },
  Query: {
    invoice,
    invoicesBySeller,
    invoicesByBuyer,
    invoicesPagination,
  },
  Invoice: {
    invoiceItems,
    budget,
  },
  InvoiceItem: {
    product,
  },
}

export default resolvers
