
# Create Order

```graphql
mutation createOrder {
  createOrder(order: {
    companyId: "0996e5ea-0622-4a20-b7eb-8b866fdec066"
    createdBy: "c3b5e133-fa07-42ac-97c0-2faa63cebefb"
    items: [
      {
        productId: "f5a3e335-27bd-4c9f-b549-e249bf2d824d"
        quantity: 1,
        addressId : "b0e66944-6bb2-4aef-846b-a49aebc2e0c6" 
      },
      {
        productId: "a40be576-81d3-4fe5-aec3-46491f21bb6e"
        quantity: 2
        addressId : "b0e66944-6bb2-4aef-846b-a49aebc2e0c6" 
      }
    ]
  }) {
    company {
      name
    }
    files {
      id
      url
    }
    createdBy
    status
    items {
      product {
        id
      }
      quantity
      product {
        id
        sku
      }
      address {
        city 
        street
      }
    }
    purchaseInterest {
      status
    }
  }
}
```

# Get Order

```graphql
query getOrder {
  order(id: "dca40ea0-50c1-44e2-b59b-54478bdb0cc4") {
    status
    createdBy
    createdAt
    company {
      name
    }
  }
}
```

# Get Orders

```graphql
query getOrders {
  orders {
    company {
      name
    }
  }
}
```
