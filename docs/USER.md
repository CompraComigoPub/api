# Create an User

```graphql
mutation createUser{
  createUser(input : {
    name : "Gabriel",
    password : "test1234"
    email : "gabriel@lanceiros.com",
    inviterId : "fcf18cdb-292d-4a7c-a130-ba511a5f65c8",
    companyId : "0384e6af-2761-44a8-b64f-4d4bbb3c3603"
  }) {
    id
    name
    firebaseId
  }
}
```

# Query User - Return logged user

```graphql
query getUser{
  user {
    id
    name
    companyId
    firebaseId
  }
}
```

# Query Users

```graphql
query {
  users {
    id
    name
    companyId
    firebaseId
  }
}


```

# Delete an User

```graphql
mutation {
  removeUser (input: {
    id : "fcf18cdb-292d-4a7c-a130-ba511a5f65c8",
  }){
    id
    name
  }
}

```

# Update firebase password

```graphql
mutation updatePassword {
  updatePassword(email : "gabriel2011.time@hotmail.com") {
    code 
    success
    message
  }
}
```
