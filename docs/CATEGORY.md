```graphql
mutation cc($label: String!) {
  createCategory(category: {label: $label}) {
    id
  }
}
```

```graphql
query gc($id: ID!) {
  category(id: $id) {
    id
    label
  }
}
```

```graphql
mutation rc($id: ID!) {
  removeCategory(id: $id) {
    id
    label
  }
}
```
