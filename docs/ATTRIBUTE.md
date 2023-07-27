
```graphql
mutation ca {
  createAttribute(attribute: {label: "Mascara", contentType: VARCHAR}) {
    id
  }
}
```


```graphql
mutation ua {
  updateAttribute(id:"cd307dc5-2168-4ce8-bc85-f4d94f25d823", attribute: {label: "Maskara"}) {
    ...E
  }
}
```

```graphql
mutation da {
  removeAttribute(id: "cd307dc5-2168-4ce8-bc85-f4d94f25d823") {
    ...E
  }
}
```

```graphql
fragment E on Attribute {
  id
  label
  contentType
}
```

```graphql
fragment C on AttributePayload {
  count
  nodes: attributes {
    ...E
  }
}
```

```graphql
query qa {
  attribute(id:"dd2a262a-1c1a-4bd6-ac99-64b7a1ca2728") {
    ...E
  }
}
```

```graphql
query qas {
  attributes(pagination: {take: 10}) {
    ...C
  }
}
```
