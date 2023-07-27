import {
  FieldType,
  PrismaClient,
  ProductForm,
  ProductFormField,
  ProductFormFieldOption,
} from '@prisma/client'
import {
  ProductFormFieldInput,
  ProductFormFieldOptionInput,
  ProductFormInput,
} from '../graphql'

const getFormsByProductId = async (
  db: PrismaClient,
  productId: string
): Promise<Array<ProductForm>> => {
  try {
    return db.productForm.findMany({
      where: { productId },
    })
  } catch (e) {
    console.error('getFormsByProductId', e.message)
    throw new Error(e)
  }
}

const getFieldsByFormId = async (
  db: PrismaClient,
  formId: string
): Promise<Array<ProductFormField>> => {
  try {
    return await db.productFormField.findMany({
      where: {
        formId,
      },
      orderBy: { createdAt: 'asc' },
    })
  } catch (e) {
    console.error('getFieldsByFormId', e.message)
    throw new Error(e)
  }
}

const getOptionsByFieldId = async (
  db: PrismaClient,
  productFormFieldId: string
): Promise<Array<ProductFormFieldOption>> => {
  try {
    return await db.productFormFieldOption.findMany({
      where: {
        productFormFieldId,
      },
    })
  } catch (e) {
    console.error('getOptionsByFieldId', e.message)
    throw new Error(e)
  }
}

const getTypeById = async (
  db: PrismaClient,
  id: string
): Promise<FieldType> => {
  try {
    return await db.fieldType.findUnique({
      where: {
        id,
      },
    })
  } catch (e) {
    console.error('getTypeById', e.message)
    throw new Error(e)
  }
}

const createFormFieldOption = (
  db: PrismaClient,
  optionInput: ProductFormFieldOptionInput,
  fieldId: string
): Promise<ProductFormFieldOption> => {
  try {
    return db.productFormFieldOption.create({
      data: {
        label: optionInput.label,
        value: optionInput.value,
        productFormFieldId: fieldId,
      },
    })
  } catch (e) {
    console.error('createProductFormFieldOption', e.message)
    throw new Error(e)
  }
}

const createFormField = async (
  db: PrismaClient,
  fieldInput: ProductFormFieldInput,
  formId: string
): Promise<ProductFormField> => {
  try {
    const field = await db.productFormField.create({
      data: {
        label: fieldInput.label,
        placeholder: fieldInput.placeholder,
        defaultValue: fieldInput.defaultValue,
        required: fieldInput.required,
        datatype: fieldInput.datatype,
        form: {
          connect: {
            id: formId,
          },
        },
        fieldType: {
          connect: {
            id: fieldInput.typeId,
          },
        },
      },
    })

    await Promise.all(
      fieldInput.options.map(async (option) => {
        await createFormFieldOption(db, option, field.id)
      })
    )

    return field
  } catch (e) {
    console.error('createProductFormField', e.message)
    throw new Error(e)
  }
}

const createForm = async (
  db: PrismaClient,
  formInput: ProductFormInput
): Promise<ProductForm> => {
  try {
    const form = await db.productForm.create({
      data: {
        productId: formInput.productId,
        name: formInput.name,
      },
    })

    await Promise.all(
      formInput.fields.map(async (field) => {
        await createFormField(db, field, form.id)
      })
    )

    return form
  } catch (e) {
    console.error('createProductForm', e.message)
    throw new Error(e)
  }
}

export default {
  getFormsByProductId,
  getFieldsByFormId,
  getOptionsByFieldId,
  getTypeById,
  createForm,
}
