import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { Context } from './../interfaces/context'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} &
  { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  FileUpload: any
  Date: any
  DecodedToken: any
}

export type InputAddress = {
  id?: Maybe<Scalars['ID']>
  street: Scalars['String']
  neighborhood: Scalars['String']
  city: Scalars['String']
  state: Scalars['String']
  zipcode: Scalars['String']
  numericIndentifier?: Maybe<Scalars['Int']>
  complement?: Maybe<Scalars['String']>
  companyId: Scalars['ID']
}

export type Address = {
  __typename?: 'Address'
  id: Scalars['ID']
  street: Scalars['String']
  neighborhood: Scalars['String']
  city: Scalars['String']
  state: Scalars['String']
  zipcode: Scalars['String']
  numericIndentifier?: Maybe<Scalars['Int']>
  complement?: Maybe<Scalars['String']>
  companyId: Scalars['ID']
}

export type CepAddress = {
  __typename?: 'CepAddress'
  street?: Maybe<Scalars['String']>
  neighborhood?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  addressByCompany?: Maybe<Array<Maybe<Address>>>
  addressByZipCode?: Maybe<CepAddress>
  attribute?: Maybe<Attribute>
  attributes?: Maybe<AttributePayload>
  budget?: Maybe<Budget>
  budgetsBySupplier?: Maybe<BudgetPagination>
  budgetsByBuyer?: Maybe<BudgetPagination>
  budgetsPagination?: Maybe<BudgetPagination>
  category?: Maybe<Category>
  categories?: Maybe<CategoryPayload>
  categoriesByNetwork?: Maybe<Array<Maybe<Category>>>
  getSubCategoriesByCategoryId?: Maybe<Array<Maybe<Category>>>
  company?: Maybe<Company>
  companyByCnpj?: Maybe<Company>
  companies?: Maybe<Array<Maybe<Company>>>
  demand?: Maybe<Demand>
  demands?: Maybe<Array<Maybe<Demand>>>
  filesByOrder?: Maybe<Array<Maybe<File>>>
  invoice?: Maybe<Invoice>
  invoiceItems?: Maybe<Array<Maybe<InvoiceItem>>>
  invoicesBySeller?: Maybe<InvoicePagination>
  invoicesByBuyer?: Maybe<InvoicePagination>
  invoicesPagination?: Maybe<InvoicePagination>
  network?: Maybe<Network>
  networks?: Maybe<NetworkPayload>
  allCompaniesByNetwork?: Maybe<NetworkCompanyPayload>
  buyerCompaniesByNetwork?: Maybe<NetworkCompanyPayload>
  sellerCompanies?: Maybe<NetworkCompanyPayload>
  companyByNetwork?: Maybe<Company>
  getActivities?: Maybe<Array<Maybe<Activity>>>
  order?: Maybe<Order>
  orders?: Maybe<Array<Maybe<Order>>>
  ordersJoinPending?: Maybe<PaginationOrder>
  leadershipOrdersPending?: Maybe<PaginationOrder>
  product?: Maybe<Product>
  products?: Maybe<ProductsResponse>
  productsInfoByPurchase?: Maybe<ProductsInfo>
  productsByCategories?: Maybe<ProductsPagination>
  purchaseInterest?: Maybe<PurchaseInterest>
  purchaseInterestsCreated?: Maybe<PurchaseInterestPayload>
  purchaseInterestJoined?: Maybe<PurchaseInterestPayload>
  purchaseInterestsByNetwork?: Maybe<PurchaseInterestPayload>
  openPurchasesByNetwork?: Maybe<PurchaseInterestPayload>
  closedPurchasesByNetwork?: Maybe<PurchaseInterestPayload>
  purchaseInterestsClosed?: Maybe<PurchaseInterestPayload>
  userByFirebaseId?: Maybe<User>
  user?: Maybe<User>
  usersByCompany?: Maybe<UsersPaginated>
  decodeInviteCompanyToken?: Maybe<DecodeInviteCompanyTokenResponse>
  decodeInviteUserToken?: Maybe<DecodeInviteUserTokenResponse>
}

export type QueryAddressByZipCodeArgs = {
  zipcode?: Maybe<Scalars['String']>
}

export type QueryAttributeArgs = {
  id: Scalars['ID']
}

export type QueryAttributesArgs = {
  pagination?: Maybe<Pagination>
}

export type QueryBudgetArgs = {
  id: Scalars['ID']
}

export type QueryBudgetsBySupplierArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<BudgetFilter>
}

export type QueryBudgetsByBuyerArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<BudgetFilter>
}

export type QueryBudgetsPaginationArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<BudgetFilter>
}

export type QueryCategoryArgs = {
  id: Scalars['ID']
}

export type QueryCategoriesArgs = {
  pagination?: Maybe<Pagination>
}

export type QueryGetSubCategoriesByCategoryIdArgs = {
  categoryId: Scalars['String']
}

export type QueryCompanyArgs = {
  id: Scalars['ID']
}

export type QueryCompanyByCnpjArgs = {
  cnpj: Scalars['String']
}

export type QueryDemandArgs = {
  id: Scalars['ID']
}

export type QueryFilesByOrderArgs = {
  orderId?: Maybe<Scalars['String']>
}

export type QueryInvoiceArgs = {
  id: Scalars['ID']
}

export type QueryInvoicesBySellerArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<InvoiceFilter>
}

export type QueryInvoicesByBuyerArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<InvoiceFilter>
}

export type QueryInvoicesPaginationArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<InvoiceFilter>
}

export type QueryNetworkArgs = {
  id: Scalars['ID']
}

export type QueryNetworksArgs = {
  pagination?: Maybe<Pagination>
}

export type QueryAllCompaniesByNetworkArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<NetworkCompanyFilter>
}

export type QueryBuyerCompaniesByNetworkArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<NetworkCompanyFilter>
}

export type QuerySellerCompaniesArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<NetworkCompanyFilter>
}

export type QueryCompanyByNetworkArgs = {
  companyId: Scalars['ID']
  networkId: Scalars['ID']
}

export type QueryOrderArgs = {
  id: Scalars['ID']
}

export type QueryOrdersJoinPendingArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<FilterOrder>
}

export type QueryLeadershipOrdersPendingArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<FilterOrder>
}

export type QueryProductArgs = {
  id: Scalars['ID']
}

export type QueryProductsArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<ProductFilter>
}

export type QueryProductsInfoByPurchaseArgs = {
  interestId: Scalars['ID']
}

export type QueryProductsByCategoriesArgs = {
  pagination: Pagination
  categoriesId: Array<Maybe<Scalars['String']>>
  productName?: Maybe<Scalars['String']>
}

export type QueryPurchaseInterestArgs = {
  id: Scalars['ID']
}

export type QueryPurchaseInterestsByNetworkArgs = {
  filter?: Maybe<PurchaseInterestFilter>
}

export type QueryOpenPurchasesByNetworkArgs = {
  filter?: Maybe<PurchaseInterestFilter>
}

export type QueryClosedPurchasesByNetworkArgs = {
  filter?: Maybe<PurchaseInterestFilter>
}

export type QueryPurchaseInterestsClosedArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<PurchaseInterestFilter>
}

export type QueryUserByFirebaseIdArgs = {
  firebaseId: Scalars['String']
}

export type QueryUsersByCompanyArgs = {
  pagination?: Maybe<Pagination>
  filter?: Maybe<FilterUser>
}

export type QueryDecodeInviteCompanyTokenArgs = {
  token: Scalars['String']
}

export type QueryDecodeInviteUserTokenArgs = {
  token: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createAddress?: Maybe<Address>
  createAttribute?: Maybe<Attribute>
  removeAttribute?: Maybe<Attribute>
  updateAttribute?: Maybe<Attribute>
  createBudget?: Maybe<Budget>
  removeBudget?: Maybe<Budget>
  updateBudgetStatus?: Maybe<Budget>
  reproveBudget?: Maybe<Budget>
  updateBudget?: Maybe<Budget>
  appendAttributeToCategory?: Maybe<CategoryAttribute>
  removeAttributeFromCategory?: Maybe<CategoryAttribute>
  createCategory?: Maybe<Category>
  removeCategory?: Maybe<Category>
  updateCategory?: Maybe<Category>
  createCompany?: Maybe<CreateCompanyMutationResponse>
  updateCompany?: Maybe<Company>
  removeCompany?: Maybe<Company>
  attachUserToCompany?: Maybe<Company>
  detachUserFromCompany?: Maybe<Company>
  createDemand?: Maybe<Demand>
  removeItemFromDemand?: Maybe<Demand>
  appendItemToDemand?: Maybe<Demand>
  updateFinancialInfo?: Maybe<Scalars['Boolean']>
  singleUpload: File
  multipleUploads: UploadedFileResponse
  uploadImage: UploadImageResponse
  createInvoice?: Maybe<Invoice>
  removeItemFromInvoice?: Maybe<Invoice>
  createNetwork?: Maybe<Network>
  updateNetwork?: Maybe<Network>
  removeNetwork?: Maybe<Network>
  appendCompanyToNetwork?: Maybe<NetworkCompany>
  removeCompanyFromNetwork?: Maybe<NetworkCompany>
  updateNetworkStatus?: Maybe<NetworkCompany>
  addViewerInActivity?: Maybe<Scalars['Boolean']>
  createOrder?: Maybe<Order>
  removeItem?: Maybe<Order>
  appendItem?: Maybe<Order>
  updateOrderStatus?: Maybe<Order>
  appendAttributeToProduct?: Maybe<ProductAttribute>
  removeAttributeFromProduct?: Maybe<ProductAttribute>
  createProduct?: Maybe<Product>
  updateProduct?: Maybe<Product>
  removeProduct?: Maybe<Product>
  createProductForm?: Maybe<ProductForm>
  createPurchaseInterest?: Maybe<PurchaseInterest>
  approvePurchaseInterest?: Maybe<PurchaseInterest>
  appendOrderToPurchaseInterest?: Maybe<PurchaseInterest>
  removeOrderFromPurchaseInterest?: Maybe<PurchaseInterest>
  updatePurchaseInterestStatus?: Maybe<PurchaseInterest>
  createUser?: Maybe<User>
  removeUser?: Maybe<User>
  updateUser?: Maybe<User>
  updatePassword?: Maybe<UpdatePasswordMutationResponse>
  generateInviteCompanyToken?: Maybe<InviteTokenResponse>
  generateInviteUserToken?: Maybe<InviteTokenResponse>
  sendEmailWithUserInfo?: Maybe<SendEmailResponse>
}

export type MutationCreateAddressArgs = {
  address: InputAddress
}

export type MutationCreateAttributeArgs = {
  attribute: CreateAttributeInput
}

export type MutationRemoveAttributeArgs = {
  id: Scalars['ID']
}

export type MutationUpdateAttributeArgs = {
  id: Scalars['ID']
  attribute?: Maybe<UpdateAttributeInput>
}

export type MutationCreateBudgetArgs = {
  budget?: Maybe<BudgetInput>
}

export type MutationRemoveBudgetArgs = {
  id: Scalars['ID']
}

export type MutationUpdateBudgetStatusArgs = {
  budgetId?: Maybe<Scalars['ID']>
  status: Scalars['String']
}

export type MutationReproveBudgetArgs = {
  budgetId?: Maybe<Scalars['ID']>
  status: Scalars['String']
  description: Scalars['String']
}

export type MutationUpdateBudgetArgs = {
  budgetId?: Maybe<Scalars['ID']>
  budgetUpdate?: Maybe<UpdateBudgetInput>
}

export type MutationAppendAttributeToCategoryArgs = {
  categoryId: Scalars['ID']
  attributeId: Scalars['ID']
}

export type MutationRemoveAttributeFromCategoryArgs = {
  categoryId: Scalars['ID']
  attributeId: Scalars['ID']
}

export type MutationCreateCategoryArgs = {
  category?: Maybe<CreateCategoryInput>
}

export type MutationRemoveCategoryArgs = {
  id: Scalars['ID']
}

export type MutationUpdateCategoryArgs = {
  category: UpdateCategoryInput
  id: Scalars['ID']
}

export type MutationCreateCompanyArgs = {
  company: CompanyCreateInput
  address?: Maybe<CompanyAddressInput>
  networkId?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  user: AddUserOwnerInput
  token: Scalars['String']
}

export type MutationUpdateCompanyArgs = {
  company?: Maybe<CompanyUpdateInput>
}

export type MutationRemoveCompanyArgs = {
  company?: Maybe<CompanyRemoveInput>
}

export type MutationAttachUserToCompanyArgs = {
  userId: Scalars['ID']
  companyId: Scalars['ID']
}

export type MutationDetachUserFromCompanyArgs = {
  id?: Maybe<Scalars['ID']>
}

export type MutationCreateDemandArgs = {
  demand?: Maybe<CreateDemandInput>
}

export type MutationRemoveItemFromDemandArgs = {
  item?: Maybe<RemoveDemandItem>
}

export type MutationAppendItemToDemandArgs = {
  item?: Maybe<AppendDemandItem>
}

export type MutationUpdateFinancialInfoArgs = {
  demandId: Scalars['ID']
  totalPrice?: Maybe<Scalars['Float']>
  items?: Maybe<Array<Maybe<UpdateDemandItem>>>
}

export type MutationSingleUploadArgs = {
  file: Scalars['FileUpload']
}

export type MutationMultipleUploadsArgs = {
  files: Array<Scalars['FileUpload']>
}

export type MutationUploadImageArgs = {
  file?: Maybe<Scalars['FileUpload']>
}

export type MutationCreateInvoiceArgs = {
  invoice?: Maybe<CreateInvoiceInput>
}

export type MutationRemoveItemFromInvoiceArgs = {
  itemId: Scalars['ID']
}

export type MutationCreateNetworkArgs = {
  network?: Maybe<NetworkInput>
}

export type MutationUpdateNetworkArgs = {
  id: Scalars['ID']
  network?: Maybe<NetworkInput>
}

export type MutationRemoveNetworkArgs = {
  id: Scalars['ID']
}

export type MutationAppendCompanyToNetworkArgs = {
  networkId: Scalars['ID']
  companyId: Scalars['ID']
  role?: Maybe<Scalars['String']>
}

export type MutationRemoveCompanyFromNetworkArgs = {
  networkId: Scalars['ID']
  companyId: Scalars['ID']
}

export type MutationUpdateNetworkStatusArgs = {
  companyId: Scalars['ID']
  status?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type MutationAddViewerInActivityArgs = {
  docsId: Array<Maybe<Scalars['String']>>
}

export type MutationCreateOrderArgs = {
  order?: Maybe<CreateOrderInput>
}

export type MutationRemoveItemArgs = {
  productId: Scalars['ID']
}

export type MutationAppendItemArgs = {
  productId: Scalars['ID']
}

export type MutationUpdateOrderStatusArgs = {
  orderId: Scalars['ID']
  status: Scalars['String']
}

export type MutationAppendAttributeToProductArgs = {
  productId: Scalars['ID']
  attributeId: Scalars['ID']
  value: Scalars['String']
}

export type MutationRemoveAttributeFromProductArgs = {
  productId: Scalars['ID']
  attributeId: Scalars['ID']
}

export type MutationCreateProductArgs = {
  product?: Maybe<CreateProductInput>
}

export type MutationUpdateProductArgs = {
  product?: Maybe<UpdateProductInput>
}

export type MutationRemoveProductArgs = {
  id?: Maybe<Scalars['String']>
}

export type MutationCreateProductFormArgs = {
  formInput?: Maybe<ProductFormInput>
}

export type MutationCreatePurchaseInterestArgs = {
  purchaseInterest?: Maybe<CreatePurchaseInterestInput>
}

export type MutationApprovePurchaseInterestArgs = {
  purchaseInterestId: Scalars['ID']
}

export type MutationAppendOrderToPurchaseInterestArgs = {
  orderId: Scalars['ID']
  purchaseInterestId: Scalars['ID']
}

export type MutationRemoveOrderFromPurchaseInterestArgs = {
  orderId: Scalars['ID']
  purchaseInterestId: Scalars['ID']
}

export type MutationUpdatePurchaseInterestStatusArgs = {
  status: Scalars['String']
  purchaseInterestId: Scalars['ID']
}

export type MutationCreateUserArgs = {
  input: AddUserInput
  token: Scalars['String']
}

export type MutationRemoveUserArgs = {
  input: RemoveUserInput
}

export type MutationUpdateUserArgs = {
  input: UpdateUserInput
}

export type MutationUpdatePasswordArgs = {
  email: Scalars['String']
}

export type MutationGenerateInviteCompanyTokenArgs = {
  role: Scalars['String']
}

export type MutationSendEmailWithUserInfoArgs = {
  message: Scalars['String']
}

export type CountRemove = {
  __typename?: 'CountRemove'
  count?: Maybe<Scalars['Int']>
}

export enum Datatype {
  Varchar = 'VARCHAR',
  Decimal = 'DECIMAL',
  Boolean = 'BOOLEAN',
}

export type Attribute = {
  __typename?: 'Attribute'
  id?: Maybe<Scalars['ID']>
  label: Scalars['String']
  contentType: Datatype
}

export type AttributePayload = {
  __typename?: 'AttributePayload'
  count?: Maybe<Scalars['Int']>
  attributes?: Maybe<Array<Maybe<Attribute>>>
}

export type CreateAttributeInput = {
  label: Scalars['String']
  contentType: Datatype
}

export type UpdateAttributeInput = {
  label: Scalars['String']
}

export type Budget = {
  __typename?: 'Budget'
  id: Scalars['ID']
  demandId: Scalars['ID']
  orderId: Scalars['ID']
  maxDate?: Maybe<Scalars['Date']>
  status?: Maybe<Scalars['String']>
  order?: Maybe<Order>
  demand?: Maybe<Demand>
  createdAt?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  statusText?: Maybe<Scalars['String']>
}

export type BudgetInput = {
  id?: Maybe<Scalars['ID']>
  demandId: Scalars['ID']
  orderId: Scalars['ID']
  maxDate?: Maybe<Scalars['Date']>
  status?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type BudgetPagination = {
  __typename?: 'BudgetPagination'
  budgets?: Maybe<Array<Maybe<Budget>>>
  total?: Maybe<Scalars['Int']>
}

export type BudgetFilter = {
  title?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

export type UpdateBudgetInput = {
  description?: Maybe<Scalars['String']>
}

export type CategoryAttribute = {
  __typename?: 'CategoryAttribute'
  categoryId: Scalars['ID']
  attributeId: Scalars['ID']
}

export type Category = {
  __typename?: 'Category'
  id?: Maybe<Scalars['ID']>
  label: Scalars['String']
  products?: Maybe<Array<Maybe<Product>>>
  parentCategory?: Maybe<Category>
  photo?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type CategoryPayload = {
  __typename?: 'CategoryPayload'
  count: Scalars['Int']
  categories?: Maybe<Array<Maybe<Category>>>
}

export type CreateCategoryInput = {
  label: Scalars['String']
  parentId?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type UpdateCategoryInput = {
  label: Scalars['String']
}

export enum Sort {
  Asc = 'asc',
  Desc = 'desc',
}

export type Pagination = {
  take?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  cursor?: Maybe<Scalars['ID']>
}

export type TokenRequest = {
  __typename?: 'TokenRequest'
  token: Scalars['String']
}

export type CompanyCreateInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  tradeName?: Maybe<Scalars['String']>
  cnpj: Scalars['String']
  logo?: Maybe<Scalars['String']>
}

export type CompanyUpdateInput = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  tradeName?: Maybe<Scalars['String']>
  cnpj?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
}

export type CompanyRemoveInput = {
  id: Scalars['ID']
}

export type AddUserOwnerInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  email: Scalars['String']
  inviterId: Scalars['String']
  invitedId?: Maybe<Scalars['String']>
  firebaseId?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  cpf?: Maybe<Scalars['String']>
  companyId?: Maybe<Scalars['ID']>
  password: Scalars['String']
  role?: Maybe<Scalars['String']>
}

export type CompanyAddressInput = {
  street: Scalars['String']
  neighborhood: Scalars['String']
  city: Scalars['String']
  state: Scalars['String']
  zipcode: Scalars['String']
  numericIndentifier?: Maybe<Scalars['Int']>
  complement?: Maybe<Scalars['String']>
  companyId?: Maybe<Scalars['ID']>
}

export type MutationResponse = {
  code: Scalars['String']
  success: Scalars['Boolean']
  message: Scalars['String']
}

export type CreateCompanyMutationResponse = MutationResponse & {
  __typename?: 'CreateCompanyMutationResponse'
  code: Scalars['String']
  success: Scalars['Boolean']
  message: Scalars['String']
  company?: Maybe<Company>
}

export type Company = {
  __typename?: 'Company'
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  tradeName?: Maybe<Scalars['String']>
  cnpj?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
  users?: Maybe<Array<Maybe<User>>>
  orders?: Maybe<Array<Maybe<Order>>>
  addresses?: Maybe<Array<Maybe<Address>>>
  networks?: Maybe<Array<Maybe<Network>>>
  role?: Maybe<Scalars['String']>
}

export enum DemandItemUnit {
  Kg = 'KG',
}

export type CreateDemandInput = {
  id?: Maybe<Scalars['ID']>
  supplierId: Scalars['ID']
  items?: Maybe<Array<Maybe<DemandItemInput>>>
  totalPrice?: Maybe<Scalars['Float']>
}

export type DemandItemInput = {
  companyId: Scalars['ID']
  productId: Scalars['ID']
  quantity: Scalars['Float']
  unity: Scalars['String']
  price?: Maybe<Scalars['Float']>
  description?: Maybe<Scalars['String']>
  icms?: Maybe<Scalars['Float']>
  ipi?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
}

export type UpdateDemandItem = {
  id: Scalars['ID']
  price?: Maybe<Scalars['Float']>
  icms?: Maybe<Scalars['Float']>
  ipi?: Maybe<Scalars['Float']>
  discount?: Maybe<Scalars['Float']>
}

export type DemandInput = {
  demandId: Scalars['ID']
}

export type AppendDemandItem = {
  demandId: Scalars['ID']
  companyId: Scalars['ID']
  productId: Scalars['ID']
  quantity: Scalars['Float']
  price: Scalars['Float']
  unity: Scalars['String']
  description: Scalars['String']
  icms: Scalars['Float']
  ipi: Scalars['Float']
  discount: Scalars['Float']
}

export type RemoveDemandItem = {
  id: Scalars['ID']
}

export type Demand = {
  __typename?: 'Demand'
  id?: Maybe<Scalars['ID']>
  supplier?: Maybe<Company>
  createdBy?: Maybe<Scalars['ID']>
  items?: Maybe<Array<Maybe<DemandItem>>>
  networkId?: Maybe<Scalars['ID']>
  totalPrice?: Maybe<Scalars['Float']>
  supplierId?: Maybe<Scalars['ID']>
}

export type DemandItem = {
  __typename?: 'DemandItem'
  id?: Maybe<Scalars['ID']>
  company?: Maybe<Company>
  product?: Maybe<Product>
  quantity?: Maybe<Scalars['Float']>
  unity?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['Float']>
  icms?: Maybe<Scalars['Float']>
  ipi?: Maybe<Scalars['Float']>
  description?: Maybe<Scalars['String']>
  discount?: Maybe<Scalars['Float']>
  totalPrice?: Maybe<Scalars['Float']>
}

export type DemandUnique = {
  __typename?: 'DemandUnique'
  id: Scalars['ID']
}

export type UploadedFileResponse = {
  __typename?: 'UploadedFileResponse'
  awsFilename: Scalars['String']
  mimetype: Scalars['String']
  encoding: Scalars['String']
  url: Scalars['String']
}

export type File = {
  __typename?: 'File'
  id: Scalars['ID']
  filename: Scalars['String']
  mimetype: Scalars['String']
  encoding: Scalars['String']
  createdAt?: Maybe<Scalars['Date']>
  url?: Maybe<Scalars['String']>
  orderId?: Maybe<Scalars['String']>
}

export type UploadImageResponse = {
  __typename?: 'UploadImageResponse'
  url: Scalars['String']
}

export type CreateInvoiceInput = {
  id?: Maybe<Scalars['ID']>
  budgetId: Scalars['ID']
  homologation: Scalars['Boolean']
  items?: Maybe<Array<Maybe<CreateInvoiceItemInput>>>
}

export type InvoiceItemInput = {
  id?: Maybe<Scalars['ID']>
  productId: Scalars['ID']
  quantity: Scalars['Float']
  price: Scalars['Float']
}

export type CreateInvoiceItemInput = {
  productId: Scalars['ID']
  quantity: Scalars['Float']
  price: Scalars['Float']
}

export type Invoice = {
  __typename?: 'Invoice'
  id?: Maybe<Scalars['ID']>
  invoiceItems?: Maybe<Array<Maybe<InvoiceItem>>>
  budget?: Maybe<Budget>
  homologation?: Maybe<Scalars['Boolean']>
  status?: Maybe<Scalars['String']>
}

export type InvoiceItem = {
  __typename?: 'InvoiceItem'
  id?: Maybe<Scalars['ID']>
  product?: Maybe<Product>
  quantity?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

export type InvoicePagination = {
  __typename?: 'InvoicePagination'
  total: Scalars['Int']
  invoices?: Maybe<Array<Maybe<Invoice>>>
}

export type InvoiceFilter = {
  status?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export enum NetworkStatus {
  Valid = 'VALID',
  Invalid = 'INVALID',
  UnderEvaluation = 'UNDER_EVALUATION',
}

export enum NetworkRole {
  Buyer = 'BUYER',
  Seller = 'SELLER',
  Operator = 'OPERATOR',
}

export type Network = {
  __typename?: 'Network'
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export type NetworkCompany = {
  __typename?: 'NetworkCompany'
  companyId: Scalars['ID']
  networkId: Scalars['ID']
  status: Scalars['String']
  role: Scalars['String']
  company?: Maybe<Company>
  createdAt?: Maybe<Scalars['Date']>
  network?: Maybe<Network>
}

export type NetworkPayload = {
  __typename?: 'NetworkPayload'
  count?: Maybe<Scalars['Int']>
  networks?: Maybe<Array<Network>>
}

export type NetworkInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
}

export type NetworkCompanyPayload = {
  __typename?: 'NetworkCompanyPayload'
  totalValues?: Maybe<Scalars['Int']>
  payload?: Maybe<Array<Maybe<NetworkCompany>>>
}

export type NetworkCompanyFilter = {
  companyName?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

export type Activity = {
  __typename?: 'Activity'
  id: Scalars['String']
  href: Scalars['String']
  title: Scalars['String']
  companiesId: Array<Maybe<Scalars['String']>>
  viewersId: Array<Maybe<Scalars['String']>>
  visualized?: Maybe<Scalars['Boolean']>
}

export enum OrderStatus {
  Valid = 'VALID',
  Invalid = 'INVALID',
  UnderEvaluation = 'UNDER_EVALUATION',
}

export type CreateOrderInput = {
  items: Array<Maybe<OrderItemInput>>
  fileIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  interestId: Scalars['ID']
  type?: Maybe<Scalars['String']>
}

export type OrderItemInput = {
  productId: Scalars['ID']
  quantity: Scalars['Float']
  unity: Scalars['String']
  description?: Maybe<Scalars['String']>
  cost?: Maybe<Scalars['Float']>
  icms?: Maybe<Scalars['Float']>
  ipi?: Maybe<Scalars['Float']>
  addressId: Scalars['ID']
  deadlineAt?: Maybe<Scalars['String']>
  shippingAt?: Maybe<Scalars['Date']>
  shippingType?: Maybe<Scalars['String']>
  supplierName?: Maybe<Scalars['String']>
  supplierEmail?: Maybe<Scalars['String']>
  supplierPhone?: Maybe<Scalars['String']>
  additionalInfos?: Maybe<Array<Maybe<OrderItemAdditionalInfoInput>>>
}

export type OrderItemAdditionalInfoInput = {
  value: Scalars['String']
  fieldId: Scalars['ID']
}

export type Order = {
  __typename?: 'Order'
  id?: Maybe<Scalars['ID']>
  companyId?: Maybe<Scalars['ID']>
  company?: Maybe<Company>
  interestId?: Maybe<Scalars['ID']>
  type?: Maybe<Scalars['String']>
  networkId?: Maybe<Scalars['ID']>
  purchaseInterest?: Maybe<PurchaseInterest>
  status?: Maybe<Scalars['String']>
  createdBy?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['Date']>
  updatedBy?: Maybe<Scalars['ID']>
  updatedAt?: Maybe<Scalars['Date']>
  items?: Maybe<Array<Maybe<OrderItem>>>
  files?: Maybe<Array<Maybe<File>>>
}

export type OrderItem = {
  __typename?: 'OrderItem'
  id?: Maybe<Scalars['ID']>
  product?: Maybe<Product>
  address?: Maybe<Address>
  quantity: Scalars['Float']
  unity: Scalars['String']
  description?: Maybe<Scalars['String']>
  cost?: Maybe<Scalars['Float']>
  icms?: Maybe<Scalars['Float']>
  ipi?: Maybe<Scalars['Float']>
  deadlineAt?: Maybe<Scalars['Date']>
  shippingAt?: Maybe<Scalars['Date']>
  shippingType?: Maybe<Scalars['String']>
  supplierName?: Maybe<Scalars['String']>
  supplierEmail?: Maybe<Scalars['String']>
  supplierPhone?: Maybe<Scalars['String']>
  addressId: Scalars['ID']
  additionalInfoForms?: Maybe<Array<Maybe<AdditionalInfoForm>>>
  productId?: Maybe<Scalars['ID']>
}

export type AdditionalInfoForm = {
  __typename?: 'AdditionalInfoForm'
  name?: Maybe<Scalars['String']>
  infos?: Maybe<Array<Maybe<OrderItemAdditionalInfo>>>
}

export type OrderItemAdditionalInfo = {
  __typename?: 'OrderItemAdditionalInfo'
  field?: Maybe<Scalars['String']>
  value: Scalars['String']
}

export type PaginationOrder = {
  __typename?: 'PaginationOrder'
  orders?: Maybe<Array<Maybe<Order>>>
  total?: Maybe<Scalars['Int']>
}

export type FilterOrder = {
  title?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

export type ProductAttribute = {
  __typename?: 'ProductAttribute'
  productId?: Maybe<Scalars['ID']>
  attributeId?: Maybe<Scalars['ID']>
  attribute?: Maybe<Attribute>
  value?: Maybe<Scalars['String']>
}

export type CreateProductInput = {
  id?: Maybe<Scalars['ID']>
  sku: Scalars['String']
  name?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type UpdateProductInput = {
  id: Scalars['ID']
  sku: Scalars['String']
  name?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type Product = {
  __typename?: 'Product'
  id?: Maybe<Scalars['ID']>
  sku: Scalars['String']
  name?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  categories?: Maybe<Array<Maybe<Category>>>
  productAttributes?: Maybe<Array<Maybe<ProductAttribute>>>
  forms?: Maybe<Array<Maybe<ProductForm>>>
}

export type ProductCategory = {
  __typename?: 'ProductCategory'
  productId: Scalars['ID']
  categoryId?: Maybe<Scalars['ID']>
  product?: Maybe<Product>
  category?: Maybe<Category>
}

export type ProductForm = {
  __typename?: 'ProductForm'
  id: Scalars['ID']
  name: Scalars['String']
  fields?: Maybe<Array<Maybe<ProductFormField>>>
  productId?: Maybe<Scalars['ID']>
}

export type ProductFormField = {
  __typename?: 'ProductFormField'
  id?: Maybe<Scalars['ID']>
  label: Scalars['String']
  placeholder: Scalars['String']
  defaultValue: Scalars['String']
  type?: Maybe<Scalars['String']>
  options?: Maybe<Array<Maybe<ProductFormFieldOption>>>
  required?: Maybe<Scalars['Boolean']>
  datatype?: Maybe<Scalars['String']>
}

export type ProductFormFieldOption = {
  __typename?: 'ProductFormFieldOption'
  value: Scalars['String']
  label: Scalars['String']
}

export type ProductsResponse = {
  __typename?: 'ProductsResponse'
  total: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  payload: Array<Maybe<Product>>
}

export type ProductFilter = {
  name?: Maybe<Scalars['String']>
  categoriesId?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type ProductFormInput = {
  name: Scalars['String']
  fields?: Maybe<Array<Maybe<ProductFormFieldInput>>>
  productId: Scalars['ID']
}

export type ProductFormFieldInput = {
  label: Scalars['String']
  placeholder: Scalars['String']
  defaultValue: Scalars['String']
  typeId: Scalars['ID']
  options?: Maybe<Array<Maybe<ProductFormFieldOptionInput>>>
  required: Scalars['Boolean']
  datatype: Scalars['String']
}

export type ProductFormFieldOptionInput = {
  label: Scalars['String']
  value: Scalars['String']
}

export type ProductsPagination = {
  __typename?: 'ProductsPagination'
  count?: Maybe<Scalars['Int']>
  products?: Maybe<Array<Product>>
}

export type ProductsInfo = {
  __typename?: 'ProductsInfo'
  products?: Maybe<Array<Maybe<Product>>>
  categoryId: Scalars['String']
}

export enum PurchaseInterestStatus {
  Open = 'OPEN',
  Closed = 'CLOSED',
}

export type CreatePurchaseInterestInput = {
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  leadershipId: Scalars['ID']
  description?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  deadline?: Maybe<Scalars['Date']>
  categoryId?: Maybe<Scalars['ID']>
}

export type PurchaseInterest = {
  __typename?: 'PurchaseInterest'
  id?: Maybe<Scalars['ID']>
  title?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  leadership?: Maybe<Company>
  leadershipId?: Maybe<Scalars['ID']>
  categoryId?: Maybe<Scalars['ID']>
  category?: Maybe<Category>
  approvedBy?: Maybe<Scalars['ID']>
  orders?: Maybe<Array<Maybe<Order>>>
  createdAt?: Maybe<Scalars['Date']>
  deadline?: Maybe<Scalars['Date']>
  networkId?: Maybe<Scalars['ID']>
  product?: Maybe<Product>
  totalOrders?: Maybe<Scalars['Int']>
  createdBy?: Maybe<Scalars['ID']>
  creator?: Maybe<User>
  operator?: Maybe<User>
  notConsolidatedOrders?: Maybe<Array<Maybe<Order>>>
  totalQuantity?: Maybe<Scalars['Float']>
}

export type PurchaseInterestPayload = {
  __typename?: 'PurchaseInterestPayload'
  count: Scalars['Int']
  purchaseInterests?: Maybe<Array<Maybe<PurchaseInterest>>>
}

export type PurchaseInterestFilter = {
  title?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
}

export type AddUserInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  email: Scalars['String']
  inviterId: Scalars['String']
  invitedId?: Maybe<Scalars['String']>
  firebaseId?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  cpf?: Maybe<Scalars['String']>
  companyId: Scalars['ID']
  password: Scalars['String']
  role: Scalars['String']
}

export type UpdateUserInput = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  email: Scalars['String']
  inviterId: Scalars['String']
  invitedId?: Maybe<Scalars['String']>
  firebaseId: Scalars['String']
  phone?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  cpf?: Maybe<Scalars['String']>
  companyId: Scalars['ID']
  role: Scalars['String']
}

export type RemoveUserInput = {
  id: Scalars['ID']
}

export type FilterUser = {
  name?: Maybe<Scalars['String']>
}

export type UsersPaginated = {
  __typename?: 'UsersPaginated'
  total: Scalars['Int']
  payload?: Maybe<Array<Maybe<User>>>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  email: Scalars['String']
  inviterId: Scalars['String']
  invitedId?: Maybe<Scalars['String']>
  firebaseId: Scalars['String']
  phone?: Maybe<Scalars['String']>
  photo?: Maybe<Scalars['String']>
  position?: Maybe<Scalars['String']>
  cpf?: Maybe<Scalars['String']>
  companyId?: Maybe<Scalars['String']>
  company?: Maybe<Company>
  role: Scalars['String']
  roleCompany?: Maybe<Scalars['String']>
  companyStatus?: Maybe<Scalars['String']>
  companyNetworkId?: Maybe<Scalars['ID']>
  activities?: Maybe<Array<Maybe<Activity>>>
}

export type DecodedInviteCompanyToken = {
  __typename?: 'DecodedInviteCompanyToken'
  userId?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  networkId?: Maybe<Scalars['String']>
}

export type DecodedInviteUserToken = {
  __typename?: 'DecodedInviteUserToken'
  companyId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

export type SendEmailResponse = {
  __typename?: 'SendEmailResponse'
  code: Scalars['String']
  success: Scalars['Boolean']
  message: Scalars['String']
}

export type UpdatePasswordMutationResponse = MutationResponse & {
  __typename?: 'UpdatePasswordMutationResponse'
  code: Scalars['String']
  success: Scalars['Boolean']
  message: Scalars['String']
  emailGenerated: Scalars['String']
}

export type InviteTokenResponse = MutationResponse & {
  __typename?: 'InviteTokenResponse'
  code: Scalars['String']
  success: Scalars['Boolean']
  message: Scalars['String']
  tokenGenerated: Scalars['String']
}

export type DecodeInviteCompanyTokenResponse = MutationResponse & {
  __typename?: 'DecodeInviteCompanyTokenResponse'
  code: Scalars['String']
  success: Scalars['Boolean']
  message: Scalars['String']
  decodedToken?: Maybe<DecodedInviteCompanyToken>
}

export type DecodeInviteUserTokenResponse = MutationResponse & {
  __typename?: 'DecodeInviteUserTokenResponse'
  code: Scalars['String']
  success: Scalars['Boolean']
  message: Scalars['String']
  decodedToken?: Maybe<DecodedInviteUserToken>
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> = ResolverFn<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  InputAddress: ResolverTypeWrapper<Partial<InputAddress>>
  ID: ResolverTypeWrapper<Partial<Scalars['ID']>>
  String: ResolverTypeWrapper<Partial<Scalars['String']>>
  Int: ResolverTypeWrapper<Partial<Scalars['Int']>>
  Address: ResolverTypeWrapper<Partial<Address>>
  CepAddress: ResolverTypeWrapper<Partial<CepAddress>>
  Query: ResolverTypeWrapper<{}>
  Mutation: ResolverTypeWrapper<{}>
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>
  Float: ResolverTypeWrapper<Partial<Scalars['Float']>>
  CountRemove: ResolverTypeWrapper<Partial<CountRemove>>
  DATATYPE: ResolverTypeWrapper<Partial<Datatype>>
  Attribute: ResolverTypeWrapper<Partial<Attribute>>
  AttributePayload: ResolverTypeWrapper<Partial<AttributePayload>>
  CreateAttributeInput: ResolverTypeWrapper<Partial<CreateAttributeInput>>
  UpdateAttributeInput: ResolverTypeWrapper<Partial<UpdateAttributeInput>>
  Budget: ResolverTypeWrapper<Partial<Budget>>
  BudgetInput: ResolverTypeWrapper<Partial<BudgetInput>>
  BudgetPagination: ResolverTypeWrapper<Partial<BudgetPagination>>
  BudgetFilter: ResolverTypeWrapper<Partial<BudgetFilter>>
  UpdateBudgetInput: ResolverTypeWrapper<Partial<UpdateBudgetInput>>
  CategoryAttribute: ResolverTypeWrapper<Partial<CategoryAttribute>>
  Category: ResolverTypeWrapper<Partial<Category>>
  CategoryPayload: ResolverTypeWrapper<Partial<CategoryPayload>>
  CreateCategoryInput: ResolverTypeWrapper<Partial<CreateCategoryInput>>
  UpdateCategoryInput: ResolverTypeWrapper<Partial<UpdateCategoryInput>>
  Sort: ResolverTypeWrapper<Partial<Sort>>
  Pagination: ResolverTypeWrapper<Partial<Pagination>>
  TokenRequest: ResolverTypeWrapper<Partial<TokenRequest>>
  CompanyCreateInput: ResolverTypeWrapper<Partial<CompanyCreateInput>>
  CompanyUpdateInput: ResolverTypeWrapper<Partial<CompanyUpdateInput>>
  CompanyRemoveInput: ResolverTypeWrapper<Partial<CompanyRemoveInput>>
  AddUserOwnerInput: ResolverTypeWrapper<Partial<AddUserOwnerInput>>
  CompanyAddressInput: ResolverTypeWrapper<Partial<CompanyAddressInput>>
  MutationResponse:
    | ResolversTypes['CreateCompanyMutationResponse']
    | ResolversTypes['UpdatePasswordMutationResponse']
    | ResolversTypes['InviteTokenResponse']
    | ResolversTypes['DecodeInviteCompanyTokenResponse']
    | ResolversTypes['DecodeInviteUserTokenResponse']
  CreateCompanyMutationResponse: ResolverTypeWrapper<
    Partial<CreateCompanyMutationResponse>
  >
  Company: ResolverTypeWrapper<Partial<Company>>
  DemandItemUnit: ResolverTypeWrapper<Partial<DemandItemUnit>>
  CreateDemandInput: ResolverTypeWrapper<Partial<CreateDemandInput>>
  DemandItemInput: ResolverTypeWrapper<Partial<DemandItemInput>>
  UpdateDemandItem: ResolverTypeWrapper<Partial<UpdateDemandItem>>
  DemandInput: ResolverTypeWrapper<Partial<DemandInput>>
  AppendDemandItem: ResolverTypeWrapper<Partial<AppendDemandItem>>
  RemoveDemandItem: ResolverTypeWrapper<Partial<RemoveDemandItem>>
  Demand: ResolverTypeWrapper<Partial<Demand>>
  DemandItem: ResolverTypeWrapper<Partial<DemandItem>>
  DemandUnique: ResolverTypeWrapper<Partial<DemandUnique>>
  FileUpload: ResolverTypeWrapper<Partial<Scalars['FileUpload']>>
  UploadedFileResponse: ResolverTypeWrapper<Partial<UploadedFileResponse>>
  File: ResolverTypeWrapper<Partial<File>>
  UploadImageResponse: ResolverTypeWrapper<Partial<UploadImageResponse>>
  CreateInvoiceInput: ResolverTypeWrapper<Partial<CreateInvoiceInput>>
  InvoiceItemInput: ResolverTypeWrapper<Partial<InvoiceItemInput>>
  CreateInvoiceItemInput: ResolverTypeWrapper<Partial<CreateInvoiceItemInput>>
  Invoice: ResolverTypeWrapper<Partial<Invoice>>
  InvoiceItem: ResolverTypeWrapper<Partial<InvoiceItem>>
  InvoicePagination: ResolverTypeWrapper<Partial<InvoicePagination>>
  InvoiceFilter: ResolverTypeWrapper<Partial<InvoiceFilter>>
  NetworkStatus: ResolverTypeWrapper<Partial<NetworkStatus>>
  NetworkRole: ResolverTypeWrapper<Partial<NetworkRole>>
  Network: ResolverTypeWrapper<Partial<Network>>
  NetworkCompany: ResolverTypeWrapper<Partial<NetworkCompany>>
  NetworkPayload: ResolverTypeWrapper<Partial<NetworkPayload>>
  NetworkInput: ResolverTypeWrapper<Partial<NetworkInput>>
  NetworkCompanyPayload: ResolverTypeWrapper<Partial<NetworkCompanyPayload>>
  NetworkCompanyFilter: ResolverTypeWrapper<Partial<NetworkCompanyFilter>>
  Activity: ResolverTypeWrapper<Partial<Activity>>
  Date: ResolverTypeWrapper<Partial<Scalars['Date']>>
  OrderStatus: ResolverTypeWrapper<Partial<OrderStatus>>
  CreateOrderInput: ResolverTypeWrapper<Partial<CreateOrderInput>>
  OrderItemInput: ResolverTypeWrapper<Partial<OrderItemInput>>
  OrderItemAdditionalInfoInput: ResolverTypeWrapper<
    Partial<OrderItemAdditionalInfoInput>
  >
  Order: ResolverTypeWrapper<Partial<Order>>
  OrderItem: ResolverTypeWrapper<Partial<OrderItem>>
  AdditionalInfoForm: ResolverTypeWrapper<Partial<AdditionalInfoForm>>
  OrderItemAdditionalInfo: ResolverTypeWrapper<Partial<OrderItemAdditionalInfo>>
  PaginationOrder: ResolverTypeWrapper<Partial<PaginationOrder>>
  FilterOrder: ResolverTypeWrapper<Partial<FilterOrder>>
  ProductAttribute: ResolverTypeWrapper<Partial<ProductAttribute>>
  CreateProductInput: ResolverTypeWrapper<Partial<CreateProductInput>>
  UpdateProductInput: ResolverTypeWrapper<Partial<UpdateProductInput>>
  Product: ResolverTypeWrapper<Partial<Product>>
  ProductCategory: ResolverTypeWrapper<Partial<ProductCategory>>
  ProductForm: ResolverTypeWrapper<Partial<ProductForm>>
  ProductFormField: ResolverTypeWrapper<Partial<ProductFormField>>
  ProductFormFieldOption: ResolverTypeWrapper<Partial<ProductFormFieldOption>>
  ProductsResponse: ResolverTypeWrapper<Partial<ProductsResponse>>
  ProductFilter: ResolverTypeWrapper<Partial<ProductFilter>>
  ProductFormInput: ResolverTypeWrapper<Partial<ProductFormInput>>
  ProductFormFieldInput: ResolverTypeWrapper<Partial<ProductFormFieldInput>>
  ProductFormFieldOptionInput: ResolverTypeWrapper<
    Partial<ProductFormFieldOptionInput>
  >
  ProductsPagination: ResolverTypeWrapper<Partial<ProductsPagination>>
  ProductsInfo: ResolverTypeWrapper<Partial<ProductsInfo>>
  PurchaseInterestStatus: ResolverTypeWrapper<Partial<PurchaseInterestStatus>>
  CreatePurchaseInterestInput: ResolverTypeWrapper<
    Partial<CreatePurchaseInterestInput>
  >
  PurchaseInterest: ResolverTypeWrapper<Partial<PurchaseInterest>>
  PurchaseInterestPayload: ResolverTypeWrapper<Partial<PurchaseInterestPayload>>
  PurchaseInterestFilter: ResolverTypeWrapper<Partial<PurchaseInterestFilter>>
  DecodedToken: ResolverTypeWrapper<Partial<Scalars['DecodedToken']>>
  AddUserInput: ResolverTypeWrapper<Partial<AddUserInput>>
  UpdateUserInput: ResolverTypeWrapper<Partial<UpdateUserInput>>
  RemoveUserInput: ResolverTypeWrapper<Partial<RemoveUserInput>>
  FilterUser: ResolverTypeWrapper<Partial<FilterUser>>
  UsersPaginated: ResolverTypeWrapper<Partial<UsersPaginated>>
  User: ResolverTypeWrapper<Partial<User>>
  DecodedInviteCompanyToken: ResolverTypeWrapper<
    Partial<DecodedInviteCompanyToken>
  >
  DecodedInviteUserToken: ResolverTypeWrapper<Partial<DecodedInviteUserToken>>
  SendEmailResponse: ResolverTypeWrapper<Partial<SendEmailResponse>>
  UpdatePasswordMutationResponse: ResolverTypeWrapper<
    Partial<UpdatePasswordMutationResponse>
  >
  InviteTokenResponse: ResolverTypeWrapper<Partial<InviteTokenResponse>>
  DecodeInviteCompanyTokenResponse: ResolverTypeWrapper<
    Partial<DecodeInviteCompanyTokenResponse>
  >
  DecodeInviteUserTokenResponse: ResolverTypeWrapper<
    Partial<DecodeInviteUserTokenResponse>
  >
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  InputAddress: Partial<InputAddress>
  ID: Partial<Scalars['ID']>
  String: Partial<Scalars['String']>
  Int: Partial<Scalars['Int']>
  Address: Partial<Address>
  CepAddress: Partial<CepAddress>
  Query: {}
  Mutation: {}
  Boolean: Partial<Scalars['Boolean']>
  Float: Partial<Scalars['Float']>
  CountRemove: Partial<CountRemove>
  Attribute: Partial<Attribute>
  AttributePayload: Partial<AttributePayload>
  CreateAttributeInput: Partial<CreateAttributeInput>
  UpdateAttributeInput: Partial<UpdateAttributeInput>
  Budget: Partial<Budget>
  BudgetInput: Partial<BudgetInput>
  BudgetPagination: Partial<BudgetPagination>
  BudgetFilter: Partial<BudgetFilter>
  UpdateBudgetInput: Partial<UpdateBudgetInput>
  CategoryAttribute: Partial<CategoryAttribute>
  Category: Partial<Category>
  CategoryPayload: Partial<CategoryPayload>
  CreateCategoryInput: Partial<CreateCategoryInput>
  UpdateCategoryInput: Partial<UpdateCategoryInput>
  Pagination: Partial<Pagination>
  TokenRequest: Partial<TokenRequest>
  CompanyCreateInput: Partial<CompanyCreateInput>
  CompanyUpdateInput: Partial<CompanyUpdateInput>
  CompanyRemoveInput: Partial<CompanyRemoveInput>
  AddUserOwnerInput: Partial<AddUserOwnerInput>
  CompanyAddressInput: Partial<CompanyAddressInput>
  MutationResponse:
    | ResolversParentTypes['CreateCompanyMutationResponse']
    | ResolversParentTypes['UpdatePasswordMutationResponse']
    | ResolversParentTypes['InviteTokenResponse']
    | ResolversParentTypes['DecodeInviteCompanyTokenResponse']
    | ResolversParentTypes['DecodeInviteUserTokenResponse']
  CreateCompanyMutationResponse: Partial<CreateCompanyMutationResponse>
  Company: Partial<Company>
  CreateDemandInput: Partial<CreateDemandInput>
  DemandItemInput: Partial<DemandItemInput>
  UpdateDemandItem: Partial<UpdateDemandItem>
  DemandInput: Partial<DemandInput>
  AppendDemandItem: Partial<AppendDemandItem>
  RemoveDemandItem: Partial<RemoveDemandItem>
  Demand: Partial<Demand>
  DemandItem: Partial<DemandItem>
  DemandUnique: Partial<DemandUnique>
  FileUpload: Partial<Scalars['FileUpload']>
  UploadedFileResponse: Partial<UploadedFileResponse>
  File: Partial<File>
  UploadImageResponse: Partial<UploadImageResponse>
  CreateInvoiceInput: Partial<CreateInvoiceInput>
  InvoiceItemInput: Partial<InvoiceItemInput>
  CreateInvoiceItemInput: Partial<CreateInvoiceItemInput>
  Invoice: Partial<Invoice>
  InvoiceItem: Partial<InvoiceItem>
  InvoicePagination: Partial<InvoicePagination>
  InvoiceFilter: Partial<InvoiceFilter>
  Network: Partial<Network>
  NetworkCompany: Partial<NetworkCompany>
  NetworkPayload: Partial<NetworkPayload>
  NetworkInput: Partial<NetworkInput>
  NetworkCompanyPayload: Partial<NetworkCompanyPayload>
  NetworkCompanyFilter: Partial<NetworkCompanyFilter>
  Activity: Partial<Activity>
  Date: Partial<Scalars['Date']>
  CreateOrderInput: Partial<CreateOrderInput>
  OrderItemInput: Partial<OrderItemInput>
  OrderItemAdditionalInfoInput: Partial<OrderItemAdditionalInfoInput>
  Order: Partial<Order>
  OrderItem: Partial<OrderItem>
  AdditionalInfoForm: Partial<AdditionalInfoForm>
  OrderItemAdditionalInfo: Partial<OrderItemAdditionalInfo>
  PaginationOrder: Partial<PaginationOrder>
  FilterOrder: Partial<FilterOrder>
  ProductAttribute: Partial<ProductAttribute>
  CreateProductInput: Partial<CreateProductInput>
  UpdateProductInput: Partial<UpdateProductInput>
  Product: Partial<Product>
  ProductCategory: Partial<ProductCategory>
  ProductForm: Partial<ProductForm>
  ProductFormField: Partial<ProductFormField>
  ProductFormFieldOption: Partial<ProductFormFieldOption>
  ProductsResponse: Partial<ProductsResponse>
  ProductFilter: Partial<ProductFilter>
  ProductFormInput: Partial<ProductFormInput>
  ProductFormFieldInput: Partial<ProductFormFieldInput>
  ProductFormFieldOptionInput: Partial<ProductFormFieldOptionInput>
  ProductsPagination: Partial<ProductsPagination>
  ProductsInfo: Partial<ProductsInfo>
  CreatePurchaseInterestInput: Partial<CreatePurchaseInterestInput>
  PurchaseInterest: Partial<PurchaseInterest>
  PurchaseInterestPayload: Partial<PurchaseInterestPayload>
  PurchaseInterestFilter: Partial<PurchaseInterestFilter>
  DecodedToken: Partial<Scalars['DecodedToken']>
  AddUserInput: Partial<AddUserInput>
  UpdateUserInput: Partial<UpdateUserInput>
  RemoveUserInput: Partial<RemoveUserInput>
  FilterUser: Partial<FilterUser>
  UsersPaginated: Partial<UsersPaginated>
  User: Partial<User>
  DecodedInviteCompanyToken: Partial<DecodedInviteCompanyToken>
  DecodedInviteUserToken: Partial<DecodedInviteUserToken>
  SendEmailResponse: Partial<SendEmailResponse>
  UpdatePasswordMutationResponse: Partial<UpdatePasswordMutationResponse>
  InviteTokenResponse: Partial<InviteTokenResponse>
  DecodeInviteCompanyTokenResponse: Partial<DecodeInviteCompanyTokenResponse>
  DecodeInviteUserTokenResponse: Partial<DecodeInviteUserTokenResponse>
}>

export type IsAuthenticatedDirectiveArgs = {}

export type IsAuthenticatedDirectiveResolver<
  Result,
  Parent,
  ContextType = Context,
  Args = IsAuthenticatedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type IsOperatorDirectiveArgs = {}

export type IsOperatorDirectiveResolver<
  Result,
  Parent,
  ContextType = Context,
  Args = IsOperatorDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type ValidateTokenDirectiveArgs = {}

export type ValidateTokenDirectiveResolver<
  Result,
  Parent,
  ContextType = Context,
  Args = ValidateTokenDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type AddressResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Address']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  neighborhood?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  zipcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  numericIndentifier?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >
  complement?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CepAddressResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['CepAddress']
> = ResolversObject<{
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  neighborhood?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Query']
> = ResolversObject<{
  addressByCompany?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Address']>>>,
    ParentType,
    ContextType
  >
  addressByZipCode?: Resolver<
    Maybe<ResolversTypes['CepAddress']>,
    ParentType,
    ContextType,
    RequireFields<QueryAddressByZipCodeArgs, never>
  >
  attribute?: Resolver<
    Maybe<ResolversTypes['Attribute']>,
    ParentType,
    ContextType,
    RequireFields<QueryAttributeArgs, 'id'>
  >
  attributes?: Resolver<
    Maybe<ResolversTypes['AttributePayload']>,
    ParentType,
    ContextType,
    RequireFields<QueryAttributesArgs, never>
  >
  budget?: Resolver<
    Maybe<ResolversTypes['Budget']>,
    ParentType,
    ContextType,
    RequireFields<QueryBudgetArgs, 'id'>
  >
  budgetsBySupplier?: Resolver<
    Maybe<ResolversTypes['BudgetPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryBudgetsBySupplierArgs, never>
  >
  budgetsByBuyer?: Resolver<
    Maybe<ResolversTypes['BudgetPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryBudgetsByBuyerArgs, never>
  >
  budgetsPagination?: Resolver<
    Maybe<ResolversTypes['BudgetPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryBudgetsPaginationArgs, never>
  >
  category?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoryArgs, 'id'>
  >
  categories?: Resolver<
    Maybe<ResolversTypes['CategoryPayload']>,
    ParentType,
    ContextType,
    RequireFields<QueryCategoriesArgs, never>
  >
  categoriesByNetwork?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType
  >
  getSubCategoriesByCategoryId?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSubCategoriesByCategoryIdArgs, 'categoryId'>
  >
  company?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompanyArgs, 'id'>
  >
  companyByCnpj?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompanyByCnpjArgs, 'cnpj'>
  >
  companies?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Company']>>>,
    ParentType,
    ContextType
  >
  demand?: Resolver<
    Maybe<ResolversTypes['Demand']>,
    ParentType,
    ContextType,
    RequireFields<QueryDemandArgs, 'id'>
  >
  demands?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Demand']>>>,
    ParentType,
    ContextType
  >
  filesByOrder?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['File']>>>,
    ParentType,
    ContextType,
    RequireFields<QueryFilesByOrderArgs, never>
  >
  invoice?: Resolver<
    Maybe<ResolversTypes['Invoice']>,
    ParentType,
    ContextType,
    RequireFields<QueryInvoiceArgs, 'id'>
  >
  invoiceItems?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['InvoiceItem']>>>,
    ParentType,
    ContextType
  >
  invoicesBySeller?: Resolver<
    Maybe<ResolversTypes['InvoicePagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryInvoicesBySellerArgs, never>
  >
  invoicesByBuyer?: Resolver<
    Maybe<ResolversTypes['InvoicePagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryInvoicesByBuyerArgs, never>
  >
  invoicesPagination?: Resolver<
    Maybe<ResolversTypes['InvoicePagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryInvoicesPaginationArgs, never>
  >
  network?: Resolver<
    Maybe<ResolversTypes['Network']>,
    ParentType,
    ContextType,
    RequireFields<QueryNetworkArgs, 'id'>
  >
  networks?: Resolver<
    Maybe<ResolversTypes['NetworkPayload']>,
    ParentType,
    ContextType,
    RequireFields<QueryNetworksArgs, never>
  >
  allCompaniesByNetwork?: Resolver<
    Maybe<ResolversTypes['NetworkCompanyPayload']>,
    ParentType,
    ContextType,
    RequireFields<QueryAllCompaniesByNetworkArgs, never>
  >
  buyerCompaniesByNetwork?: Resolver<
    Maybe<ResolversTypes['NetworkCompanyPayload']>,
    ParentType,
    ContextType,
    RequireFields<QueryBuyerCompaniesByNetworkArgs, never>
  >
  sellerCompanies?: Resolver<
    Maybe<ResolversTypes['NetworkCompanyPayload']>,
    ParentType,
    ContextType,
    RequireFields<QuerySellerCompaniesArgs, never>
  >
  companyByNetwork?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<QueryCompanyByNetworkArgs, 'companyId' | 'networkId'>
  >
  getActivities?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Activity']>>>,
    ParentType,
    ContextType
  >
  order?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderArgs, 'id'>
  >
  orders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType
  >
  ordersJoinPending?: Resolver<
    Maybe<ResolversTypes['PaginationOrder']>,
    ParentType,
    ContextType,
    RequireFields<QueryOrdersJoinPendingArgs, never>
  >
  leadershipOrdersPending?: Resolver<
    Maybe<ResolversTypes['PaginationOrder']>,
    ParentType,
    ContextType,
    RequireFields<QueryLeadershipOrdersPendingArgs, never>
  >
  product?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductArgs, 'id'>
  >
  products?: Resolver<
    Maybe<ResolversTypes['ProductsResponse']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductsArgs, never>
  >
  productsInfoByPurchase?: Resolver<
    Maybe<ResolversTypes['ProductsInfo']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductsInfoByPurchaseArgs, 'interestId'>
  >
  productsByCategories?: Resolver<
    Maybe<ResolversTypes['ProductsPagination']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductsByCategoriesArgs, 'pagination' | 'categoriesId'>
  >
  purchaseInterest?: Resolver<
    Maybe<ResolversTypes['PurchaseInterest']>,
    ParentType,
    ContextType,
    RequireFields<QueryPurchaseInterestArgs, 'id'>
  >
  purchaseInterestsCreated?: Resolver<
    Maybe<ResolversTypes['PurchaseInterestPayload']>,
    ParentType,
    ContextType
  >
  purchaseInterestJoined?: Resolver<
    Maybe<ResolversTypes['PurchaseInterestPayload']>,
    ParentType,
    ContextType
  >
  purchaseInterestsByNetwork?: Resolver<
    Maybe<ResolversTypes['PurchaseInterestPayload']>,
    ParentType,
    ContextType,
    RequireFields<QueryPurchaseInterestsByNetworkArgs, never>
  >
  openPurchasesByNetwork?: Resolver<
    Maybe<ResolversTypes['PurchaseInterestPayload']>,
    ParentType,
    ContextType,
    RequireFields<QueryOpenPurchasesByNetworkArgs, never>
  >
  closedPurchasesByNetwork?: Resolver<
    Maybe<ResolversTypes['PurchaseInterestPayload']>,
    ParentType,
    ContextType,
    RequireFields<QueryClosedPurchasesByNetworkArgs, never>
  >
  purchaseInterestsClosed?: Resolver<
    Maybe<ResolversTypes['PurchaseInterestPayload']>,
    ParentType,
    ContextType,
    RequireFields<QueryPurchaseInterestsClosedArgs, never>
  >
  userByFirebaseId?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByFirebaseIdArgs, 'firebaseId'>
  >
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  usersByCompany?: Resolver<
    Maybe<ResolversTypes['UsersPaginated']>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersByCompanyArgs, never>
  >
  decodeInviteCompanyToken?: Resolver<
    Maybe<ResolversTypes['DecodeInviteCompanyTokenResponse']>,
    ParentType,
    ContextType,
    RequireFields<QueryDecodeInviteCompanyTokenArgs, 'token'>
  >
  decodeInviteUserToken?: Resolver<
    Maybe<ResolversTypes['DecodeInviteUserTokenResponse']>,
    ParentType,
    ContextType,
    RequireFields<QueryDecodeInviteUserTokenArgs, 'token'>
  >
}>

export type MutationResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Mutation']
> = ResolversObject<{
  createAddress?: Resolver<
    Maybe<ResolversTypes['Address']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateAddressArgs, 'address'>
  >
  createAttribute?: Resolver<
    Maybe<ResolversTypes['Attribute']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateAttributeArgs, 'attribute'>
  >
  removeAttribute?: Resolver<
    Maybe<ResolversTypes['Attribute']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveAttributeArgs, 'id'>
  >
  updateAttribute?: Resolver<
    Maybe<ResolversTypes['Attribute']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAttributeArgs, 'id'>
  >
  createBudget?: Resolver<
    Maybe<ResolversTypes['Budget']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateBudgetArgs, never>
  >
  removeBudget?: Resolver<
    Maybe<ResolversTypes['Budget']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveBudgetArgs, 'id'>
  >
  updateBudgetStatus?: Resolver<
    Maybe<ResolversTypes['Budget']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBudgetStatusArgs, 'status'>
  >
  reproveBudget?: Resolver<
    Maybe<ResolversTypes['Budget']>,
    ParentType,
    ContextType,
    RequireFields<MutationReproveBudgetArgs, 'status' | 'description'>
  >
  updateBudget?: Resolver<
    Maybe<ResolversTypes['Budget']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBudgetArgs, never>
  >
  appendAttributeToCategory?: Resolver<
    Maybe<ResolversTypes['CategoryAttribute']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationAppendAttributeToCategoryArgs,
      'categoryId' | 'attributeId'
    >
  >
  removeAttributeFromCategory?: Resolver<
    Maybe<ResolversTypes['CategoryAttribute']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationRemoveAttributeFromCategoryArgs,
      'categoryId' | 'attributeId'
    >
  >
  createCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCategoryArgs, never>
  >
  removeCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveCategoryArgs, 'id'>
  >
  updateCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCategoryArgs, 'category' | 'id'>
  >
  createCompany?: Resolver<
    Maybe<ResolversTypes['CreateCompanyMutationResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCompanyArgs, 'company' | 'user' | 'token'>
  >
  updateCompany?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCompanyArgs, never>
  >
  removeCompany?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveCompanyArgs, never>
  >
  attachUserToCompany?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationAttachUserToCompanyArgs, 'userId' | 'companyId'>
  >
  detachUserFromCompany?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType,
    RequireFields<MutationDetachUserFromCompanyArgs, never>
  >
  createDemand?: Resolver<
    Maybe<ResolversTypes['Demand']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateDemandArgs, never>
  >
  removeItemFromDemand?: Resolver<
    Maybe<ResolversTypes['Demand']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveItemFromDemandArgs, never>
  >
  appendItemToDemand?: Resolver<
    Maybe<ResolversTypes['Demand']>,
    ParentType,
    ContextType,
    RequireFields<MutationAppendItemToDemandArgs, never>
  >
  updateFinancialInfo?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateFinancialInfoArgs, 'demandId'>
  >
  singleUpload?: Resolver<
    ResolversTypes['File'],
    ParentType,
    ContextType,
    RequireFields<MutationSingleUploadArgs, 'file'>
  >
  multipleUploads?: Resolver<
    ResolversTypes['UploadedFileResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationMultipleUploadsArgs, 'files'>
  >
  uploadImage?: Resolver<
    ResolversTypes['UploadImageResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationUploadImageArgs, never>
  >
  createInvoice?: Resolver<
    Maybe<ResolversTypes['Invoice']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateInvoiceArgs, never>
  >
  removeItemFromInvoice?: Resolver<
    Maybe<ResolversTypes['Invoice']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveItemFromInvoiceArgs, 'itemId'>
  >
  createNetwork?: Resolver<
    Maybe<ResolversTypes['Network']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateNetworkArgs, never>
  >
  updateNetwork?: Resolver<
    Maybe<ResolversTypes['Network']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateNetworkArgs, 'id'>
  >
  removeNetwork?: Resolver<
    Maybe<ResolversTypes['Network']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveNetworkArgs, 'id'>
  >
  appendCompanyToNetwork?: Resolver<
    Maybe<ResolversTypes['NetworkCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationAppendCompanyToNetworkArgs, 'networkId' | 'companyId'>
  >
  removeCompanyFromNetwork?: Resolver<
    Maybe<ResolversTypes['NetworkCompany']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationRemoveCompanyFromNetworkArgs,
      'networkId' | 'companyId'
    >
  >
  updateNetworkStatus?: Resolver<
    Maybe<ResolversTypes['NetworkCompany']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateNetworkStatusArgs, 'companyId'>
  >
  addViewerInActivity?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddViewerInActivityArgs, 'docsId'>
  >
  createOrder?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderArgs, never>
  >
  removeItem?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveItemArgs, 'productId'>
  >
  appendItem?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationAppendItemArgs, 'productId'>
  >
  updateOrderStatus?: Resolver<
    Maybe<ResolversTypes['Order']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOrderStatusArgs, 'orderId' | 'status'>
  >
  appendAttributeToProduct?: Resolver<
    Maybe<ResolversTypes['ProductAttribute']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationAppendAttributeToProductArgs,
      'productId' | 'attributeId' | 'value'
    >
  >
  removeAttributeFromProduct?: Resolver<
    Maybe<ResolversTypes['ProductAttribute']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationRemoveAttributeFromProductArgs,
      'productId' | 'attributeId'
    >
  >
  createProduct?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductArgs, never>
  >
  updateProduct?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductArgs, never>
  >
  removeProduct?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveProductArgs, never>
  >
  createProductForm?: Resolver<
    Maybe<ResolversTypes['ProductForm']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductFormArgs, never>
  >
  createPurchaseInterest?: Resolver<
    Maybe<ResolversTypes['PurchaseInterest']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreatePurchaseInterestArgs, never>
  >
  approvePurchaseInterest?: Resolver<
    Maybe<ResolversTypes['PurchaseInterest']>,
    ParentType,
    ContextType,
    RequireFields<MutationApprovePurchaseInterestArgs, 'purchaseInterestId'>
  >
  appendOrderToPurchaseInterest?: Resolver<
    Maybe<ResolversTypes['PurchaseInterest']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationAppendOrderToPurchaseInterestArgs,
      'orderId' | 'purchaseInterestId'
    >
  >
  removeOrderFromPurchaseInterest?: Resolver<
    Maybe<ResolversTypes['PurchaseInterest']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationRemoveOrderFromPurchaseInterestArgs,
      'orderId' | 'purchaseInterestId'
    >
  >
  updatePurchaseInterestStatus?: Resolver<
    Maybe<ResolversTypes['PurchaseInterest']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdatePurchaseInterestStatusArgs,
      'status' | 'purchaseInterestId'
    >
  >
  createUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'input' | 'token'>
  >
  removeUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveUserArgs, 'input'>
  >
  updateUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'input'>
  >
  updatePassword?: Resolver<
    Maybe<ResolversTypes['UpdatePasswordMutationResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePasswordArgs, 'email'>
  >
  generateInviteCompanyToken?: Resolver<
    Maybe<ResolversTypes['InviteTokenResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationGenerateInviteCompanyTokenArgs, 'role'>
  >
  generateInviteUserToken?: Resolver<
    Maybe<ResolversTypes['InviteTokenResponse']>,
    ParentType,
    ContextType
  >
  sendEmailWithUserInfo?: Resolver<
    Maybe<ResolversTypes['SendEmailResponse']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendEmailWithUserInfoArgs, 'message'>
  >
}>

export type CountRemoveResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['CountRemove']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AttributeResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Attribute']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  contentType?: Resolver<ResolversTypes['DATATYPE'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AttributePayloadResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['AttributePayload']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  attributes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Attribute']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BudgetResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Budget']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  demandId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  orderId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  maxDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType>
  demand?: Resolver<Maybe<ResolversTypes['Demand']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  statusText?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BudgetPaginationResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['BudgetPagination']
> = ResolversObject<{
  budgets?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Budget']>>>,
    ParentType,
    ContextType
  >
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CategoryAttributeResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['CategoryAttribute']
> = ResolversObject<{
  categoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  attributeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CategoryResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Category']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  products?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Product']>>>,
    ParentType,
    ContextType
  >
  parentCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType
  >
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CategoryPayloadResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['CategoryPayload']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TokenRequestResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['TokenRequest']
> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MutationResponseResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['MutationResponse']
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | 'CreateCompanyMutationResponse'
    | 'UpdatePasswordMutationResponse'
    | 'InviteTokenResponse'
    | 'DecodeInviteCompanyTokenResponse'
    | 'DecodeInviteUserTokenResponse',
    ParentType,
    ContextType
  >
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type CreateCompanyMutationResponseResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['CreateCompanyMutationResponse']
> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CompanyResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Company']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  tradeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  cnpj?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  users?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >
  orders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType
  >
  addresses?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Address']>>>,
    ParentType,
    ContextType
  >
  networks?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Network']>>>,
    ParentType,
    ContextType
  >
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DemandResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Demand']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  supplier?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>
  createdBy?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  items?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['DemandItem']>>>,
    ParentType,
    ContextType
  >
  networkId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  totalPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  supplierId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DemandItemResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['DemandItem']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  unity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  icms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  ipi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  discount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  totalPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DemandUniqueResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['DemandUnique']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface FileUploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['FileUpload'], any> {
  name: 'FileUpload'
}

export type UploadedFileResponseResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['UploadedFileResponse']
> = ResolversObject<{
  awsFilename?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FileResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['File']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UploadImageResponseResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['UploadImageResponse']
> = ResolversObject<{
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type InvoiceResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Invoice']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  invoiceItems?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['InvoiceItem']>>>,
    ParentType,
    ContextType
  >
  budget?: Resolver<Maybe<ResolversTypes['Budget']>, ParentType, ContextType>
  homologation?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type InvoiceItemResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['InvoiceItem']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type InvoicePaginationResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['InvoicePagination']
> = ResolversObject<{
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  invoices?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Invoice']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type NetworkResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Network']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type NetworkCompanyResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['NetworkCompany']
> = ResolversObject<{
  companyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  networkId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  network?: Resolver<Maybe<ResolversTypes['Network']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type NetworkPayloadResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['NetworkPayload']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  networks?: Resolver<
    Maybe<Array<ResolversTypes['Network']>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type NetworkCompanyPayloadResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['NetworkCompanyPayload']
> = ResolversObject<{
  totalValues?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  payload?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['NetworkCompany']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ActivityResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Activity']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  href?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  companiesId?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >
  viewersId?: Resolver<
    Array<Maybe<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >
  visualized?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type OrderResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Order']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  companyId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>
  interestId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  networkId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  purchaseInterest?: Resolver<
    Maybe<ResolversTypes['PurchaseInterest']>,
    ParentType,
    ContextType
  >
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  createdBy?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  updatedBy?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  items?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['OrderItem']>>>,
    ParentType,
    ContextType
  >
  files?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['File']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type OrderItemResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['OrderItem']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>
  unity?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  cost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  icms?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  ipi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  deadlineAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  shippingAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  shippingType?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  supplierName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  supplierEmail?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  supplierPhone?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  addressId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  additionalInfoForms?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['AdditionalInfoForm']>>>,
    ParentType,
    ContextType
  >
  productId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AdditionalInfoFormResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['AdditionalInfoForm']
> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  infos?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['OrderItemAdditionalInfo']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type OrderItemAdditionalInfoResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['OrderItemAdditionalInfo']
> = ResolversObject<{
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PaginationOrderResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['PaginationOrder']
> = ResolversObject<{
  orders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType
  >
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductAttributeResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['ProductAttribute']
> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  attributeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  attribute?: Resolver<
    Maybe<ResolversTypes['Attribute']>,
    ParentType,
    ContextType
  >
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Product']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType
  >
  productAttributes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductAttribute']>>>,
    ParentType,
    ContextType
  >
  forms?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductForm']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductCategoryResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['ProductCategory']
> = ResolversObject<{
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  categoryId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>
  category?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductFormResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['ProductForm']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  fields?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductFormField']>>>,
    ParentType,
    ContextType
  >
  productId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductFormFieldResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['ProductFormField']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  placeholder?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  defaultValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  options?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['ProductFormFieldOption']>>>,
    ParentType,
    ContextType
  >
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  datatype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductFormFieldOptionResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['ProductFormFieldOption']
> = ResolversObject<{
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductsResponseResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['ProductsResponse']
> = ResolversObject<{
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  payload?: Resolver<
    Array<Maybe<ResolversTypes['Product']>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductsPaginationResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['ProductsPagination']
> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  products?: Resolver<
    Maybe<Array<ResolversTypes['Product']>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductsInfoResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['ProductsInfo']
> = ResolversObject<{
  products?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Product']>>>,
    ParentType,
    ContextType
  >
  categoryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PurchaseInterestResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['PurchaseInterest']
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  leadership?: Resolver<
    Maybe<ResolversTypes['Company']>,
    ParentType,
    ContextType
  >
  leadershipId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  categoryId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  category?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType
  >
  approvedBy?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  orders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType
  >
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  deadline?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>
  networkId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>
  totalOrders?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  createdBy?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  operator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  notConsolidatedOrders?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Order']>>>,
    ParentType,
    ContextType
  >
  totalQuantity?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PurchaseInterestPayloadResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['PurchaseInterestPayload']
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  purchaseInterests?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['PurchaseInterest']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface DecodedTokenScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DecodedToken'], any> {
  name: 'DecodedToken'
}

export type UsersPaginatedResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['UsersPaginated']
> = ResolversObject<{
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  payload?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UserResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  inviterId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  invitedId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  firebaseId?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  photo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  cpf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  roleCompany?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  companyStatus?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  companyNetworkId?: Resolver<
    Maybe<ResolversTypes['ID']>,
    ParentType,
    ContextType
  >
  activities?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Activity']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DecodedInviteCompanyTokenResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['DecodedInviteCompanyToken']
> = ResolversObject<{
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  networkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DecodedInviteUserTokenResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['DecodedInviteUserToken']
> = ResolversObject<{
  companyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type SendEmailResponseResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['SendEmailResponse']
> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UpdatePasswordMutationResponseResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['UpdatePasswordMutationResponse']
> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  emailGenerated?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type InviteTokenResponseResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['InviteTokenResponse']
> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  tokenGenerated?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DecodeInviteCompanyTokenResponseResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['DecodeInviteCompanyTokenResponse']
> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  decodedToken?: Resolver<
    Maybe<ResolversTypes['DecodedInviteCompanyToken']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DecodeInviteUserTokenResponseResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['DecodeInviteUserTokenResponse']
> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  decodedToken?: Resolver<
    Maybe<ResolversTypes['DecodedInviteUserToken']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = Context> = ResolversObject<{
  Address?: AddressResolvers<ContextType>
  CepAddress?: CepAddressResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  CountRemove?: CountRemoveResolvers<ContextType>
  Attribute?: AttributeResolvers<ContextType>
  AttributePayload?: AttributePayloadResolvers<ContextType>
  Budget?: BudgetResolvers<ContextType>
  BudgetPagination?: BudgetPaginationResolvers<ContextType>
  CategoryAttribute?: CategoryAttributeResolvers<ContextType>
  Category?: CategoryResolvers<ContextType>
  CategoryPayload?: CategoryPayloadResolvers<ContextType>
  TokenRequest?: TokenRequestResolvers<ContextType>
  MutationResponse?: MutationResponseResolvers<ContextType>
  CreateCompanyMutationResponse?: CreateCompanyMutationResponseResolvers<
    ContextType
  >
  Company?: CompanyResolvers<ContextType>
  Demand?: DemandResolvers<ContextType>
  DemandItem?: DemandItemResolvers<ContextType>
  DemandUnique?: DemandUniqueResolvers<ContextType>
  FileUpload?: GraphQLScalarType
  UploadedFileResponse?: UploadedFileResponseResolvers<ContextType>
  File?: FileResolvers<ContextType>
  UploadImageResponse?: UploadImageResponseResolvers<ContextType>
  Invoice?: InvoiceResolvers<ContextType>
  InvoiceItem?: InvoiceItemResolvers<ContextType>
  InvoicePagination?: InvoicePaginationResolvers<ContextType>
  Network?: NetworkResolvers<ContextType>
  NetworkCompany?: NetworkCompanyResolvers<ContextType>
  NetworkPayload?: NetworkPayloadResolvers<ContextType>
  NetworkCompanyPayload?: NetworkCompanyPayloadResolvers<ContextType>
  Activity?: ActivityResolvers<ContextType>
  Date?: GraphQLScalarType
  Order?: OrderResolvers<ContextType>
  OrderItem?: OrderItemResolvers<ContextType>
  AdditionalInfoForm?: AdditionalInfoFormResolvers<ContextType>
  OrderItemAdditionalInfo?: OrderItemAdditionalInfoResolvers<ContextType>
  PaginationOrder?: PaginationOrderResolvers<ContextType>
  ProductAttribute?: ProductAttributeResolvers<ContextType>
  Product?: ProductResolvers<ContextType>
  ProductCategory?: ProductCategoryResolvers<ContextType>
  ProductForm?: ProductFormResolvers<ContextType>
  ProductFormField?: ProductFormFieldResolvers<ContextType>
  ProductFormFieldOption?: ProductFormFieldOptionResolvers<ContextType>
  ProductsResponse?: ProductsResponseResolvers<ContextType>
  ProductsPagination?: ProductsPaginationResolvers<ContextType>
  ProductsInfo?: ProductsInfoResolvers<ContextType>
  PurchaseInterest?: PurchaseInterestResolvers<ContextType>
  PurchaseInterestPayload?: PurchaseInterestPayloadResolvers<ContextType>
  DecodedToken?: GraphQLScalarType
  UsersPaginated?: UsersPaginatedResolvers<ContextType>
  User?: UserResolvers<ContextType>
  DecodedInviteCompanyToken?: DecodedInviteCompanyTokenResolvers<ContextType>
  DecodedInviteUserToken?: DecodedInviteUserTokenResolvers<ContextType>
  SendEmailResponse?: SendEmailResponseResolvers<ContextType>
  UpdatePasswordMutationResponse?: UpdatePasswordMutationResponseResolvers<
    ContextType
  >
  InviteTokenResponse?: InviteTokenResponseResolvers<ContextType>
  DecodeInviteCompanyTokenResponse?: DecodeInviteCompanyTokenResponseResolvers<
    ContextType
  >
  DecodeInviteUserTokenResponse?: DecodeInviteUserTokenResponseResolvers<
    ContextType
  >
}>

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>
export type DirectiveResolvers<ContextType = Context> = ResolversObject<{
  isAuthenticated?: IsAuthenticatedDirectiveResolver<any, any, ContextType>
  isOperator?: IsOperatorDirectiveResolver<any, any, ContextType>
  validateToken?: ValidateTokenDirectiveResolver<any, any, ContextType>
}>

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = Context> = DirectiveResolvers<
  ContextType
>
