```grapqhl
mutation cc($label: String!) {
  createCategory(category: {label: $label}) {
    id
  }
}
```

```grapqhl
mutation ca {
  createAttribute(attribute: {label: "cor", contentType: VARCHAR}) {
    id
  }
}
```


```grapqhl
mutation a($categoryId: ID!, $attributeId: ID!) {
  appendAttributeToCategory(
    categoryId: $categoryId,
    attributeId: $attributeId
  ) {
    categoryId
    attributeId
  }
}
```

```grapqhl
mutation r($categoryId: ID!, $attributeId: ID!) {
  removeAttributeFromCategory(
    categoryId: $categoryId
    attributeId: $attributeId
  ) {
    categoryId
    attributeId
  }
}
```
