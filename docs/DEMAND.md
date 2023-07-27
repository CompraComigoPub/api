# Create Demand

```graphql
mutation createDemand {
  createDemand(demand: {
    supplierId: "ac2d34cf-34a6-47a2-8b50-65bfa292eeba"
    orders: [
      {
        orderId: "dca40ea0-50c1-44e2-b59b-54478bdb0cc4"
      }
    ]
  }) {
    supplier {
      id
      name
    }
    items {
      company {
        id
        name
      }
      product {
        sku
      }
      quantity
    }
  }
}
```

# Remove Order

```graphql
mutation removeOrder {
  removeOrderFromPurchaseInterest(
    orderId: "d7d752ce-bff0-4724-8d44-8fac7d41b12c"
    purchaseInterestId: "c3b5e133-fa07-42ac-97c0-2faa63cebefb"
  ) {
      id
  }
}
```

# Append Order

```graphql
mutation appendOrder {
  appendOrderToPurchaseInterest(orderId: "d7d752ce-bff0-4724-8d44-8fac7d41b12c"
  purchaseInterestId: "c3b5e133-fa07-42ac-97c0-2faa63cebefb") {
    id
  }
}
```
