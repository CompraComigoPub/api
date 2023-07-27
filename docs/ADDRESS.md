# Create Order 
```graphql
mutation createAddress {
  createAddress(address : {
    state : "SP",
    city : "São Paulo",
    neighborhood : "Capão Redondo",
    numericIndentifier : 12,
    companyId : "c1eb2400-0303-447e-97c5-de0375b0b9cc",
    street: "Rua Antigo continente",
    zipcode : "04941080",
    complement:"na outra rua"
    
  }) {
    id
    street
    zipcode
    city
    state
    street
    
  }
}
```
# Find By Company

```graphql
  query addressByCompany {
  addressByCompany(companyId : "f302a518-4d50-41f3-9049-961c1ed005c2"){
    zipcode
    state
    state
    street
    neighborhood
    numericIndentifier
    complement
    city
  }
}

```

