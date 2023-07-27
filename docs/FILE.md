# Upload single file

```graphql
mutation ($file: FileUpload!) {
  singleUpload(file: $file) {
    id
    filename
    url  
  }
}
```