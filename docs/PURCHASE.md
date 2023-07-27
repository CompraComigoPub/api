```graphql
mutation createInvoice {
  createInvoice(invoice: {
    id:  "ac2d34cf-34a6-47a2-8b50-65bfa292eeba"
    items: [
      {
        productId: "c3b5e133-fa07-42ac-97c0-2faa63cebefb"
        quantity: 10
        price: 50.00
      }
    ]
  }) {
    id
  }
}
```

```graphql
query getInvoice {
  invoice(id: "c3b5e133-fa07-42ac-97c0-2faa63cebefb") {
    id
    items {
      id
      product {
        sku
      }
      quantity
      price
    }
  }
}
```
