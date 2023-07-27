NETWORK

```graphql
mutation cn {
  createNetwork(network: {
    name: "Amiguinhos"
  }) {
    id
    name
  }
}
```

```graphql
mutation un {
  updateNetwork(id: "3b46c731-8ce6-4ab1-858c-16fee45c5f3c", network: {
    name: "Amiguinhos update"
  }) {
    id
    name
  }
}
```

```graphql
mutation rn {
  removeNetwork(id: "3b46c731-8ce6-4ab1-858c-16fee45c5f3c") {
    id
  }
}
```

```graphql
query n {
  network(id: "3b46c731-8ce6-4ab1-858c-16fee45c5f3c") {
    id
    name
  }
}
```

```graphql
query ns {
  networks {
    count
    networks {
      id
      name
    }
  }
}
```

```graphql
query ns_p {
  networks(pagination: {
    take: 10
    skip: 0
  }) {
    count
    networks {
      id
      name
    }
  }
}
```

```graphql
query ns_p1 {
  networks(pagination: {
    take: 2
    skip: 1
    cursor: "5707702e-5d70-4c09-a2dd-2677b6506d6f"
  }) {
    count
    networks {
      id
      name
    }
  }
}
```
