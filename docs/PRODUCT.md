```graphl
mutation cp {
  createProduct(product: {
    sku: "IPhone 12 Mini"
    categoryId:  "e20c7a8a-d154-4a9a-9368-90c2aeeaa406"
  }) {
    id
  }
}
```

```graphl
query gp {
  product(id: "c880c3cf-e1a4-4d25-98c0-20dea9cb9f04") {
    sku
  }
}
```

```graphl
mutation rp {
  removeProduct(id: "271fc5af-2d72-412f-b920-628c589ebc68") {
    id
    sku
  }
}
```

