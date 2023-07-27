import { IResolvers } from 'graphql-tools'

import product from './queries/product'
import products from './queries/products'
import forms from './queries/forms'
import fields from './queries/fields'
import options from './queries/options'
import productAttributes from './queries/product-attributes'

import createProduct from './mutations/create-product'
import updateProduct from './mutations/update-product'
import removeProduct from './mutations/remove-product'
import type from './queries/type'
import createProductForm from './queries/create-productForm'
import categories from './queries/categories'
import productsByCategories from './queries/productsByCategories'
import productsInfoByPurchase from './queries/productsInfoByPurchase'

const productResolver: IResolvers = {
  Query: {
    product,
    products,
    productsInfoByPurchase,
    productsByCategories,
  },
  Mutation: {
    createProduct,
    updateProduct,
    removeProduct,
    createProductForm,
  },
  Product: {
    productAttributes,
    forms,
    categories,
  },
  ProductForm: {
    fields,
  },
  ProductFormField: {
    options,
    type,
  },
}

export default productResolver
