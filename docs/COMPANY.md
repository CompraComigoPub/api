
```graphql
# id informed by user
mutation createCompanyComplete {
  createCompany(company: {
    id: "77035f97-4a6c-4b1c-95b2-d4f1f457ebde"
    name: "XPTO Soluções"
    cnpj: "12312312312"
  }) {
    id
  }
}
```

```graphql
query getCompany {
  company(id: "57d66b5a-2415-4fac-9db8-b944049fab6f") {
    name
  }
}
```

```graphql
# generated database id
mutation createCompanyWithoutID {
  createCompany(company: {
    name: "XPTO Soluções"
    cnpj: "12312312312"
  }) {
    id
  }
}
```

```graphql
# error.message: "Company ID must be a valid UUID!",
mutation createCompanyWithInvalidID {
  createCompany(company: {
    id: "77035f97-4a6c"
    name: "XPTO Soluções"
    cnpj: "12312312312"
  }) {
    id
  }
}
```


```graphql
mutation updateCompanyComplete {
  updateCompany(company: {
    id: "77035f97-4a6c-4b1c-95b2-d4f1f457ebde"
    name: "XPTO Soluções Alternativas"
    cnpj: "12312312312"
  }) {
    id
  }
}
```

```graphql
mutation removeCompanyComplete {
  removeCompany(company: {
    id: "77035f97-4a6c-4b1c-95b2-d4f1f457ebde"
  }) {
    name
  }
}
```
