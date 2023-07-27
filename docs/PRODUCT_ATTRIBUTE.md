```graphql
mutation cc($categorylabel: String!) {
  category: createCategory(category: {label: $categorylabel}) {
    id
  }
}
```

```graphql
mutation cp($sku: String!, $categoryId: ID!) {
  product: createProduct(product: {
    sku: $sku
    categoryId: $categoryId
  }) {
    id
  }
}
```

```graphql
mutation ca($label: String!) {
   attribute: createAttribute(attribute: {label: $label, contentType: VARCHAR}) {
    id
  }
}
```

```graphql
mutation q1($productId: ID!, $attributeId: ID!) {
  appendAttributeToProduct(
    productId:   $productId,
    attributeId: $attributeId
    value:       "Azul"
  ) {
    productId
    attributeId
  }
}
```

```graphql
mutation q2($productId: ID!, $attributeId: ID!) {
  removeAttributeFromProduct(productId: $productId, attributeId: $attributeId) {
    productId
    attributeId
  }
}
```
