
# Create Purchase Interest

```graphql
mutation createPurchaseInterest {
   createPurchaseInterest(purchaseInterest: {
     orderId: "57306b2c-c93f-4121-a5a1-1fae2310480a"
     leadershipId: "7b68b56e-54e6-40eb-93e0-a57b5f0f80e2"
     deadline: "2022-10-06T14:54:54+00:00"
   }) {
     id
   }
}
```

# Append Order

```graphql
mutation appendOrder {
  appendOrderToPurchaseInterest(orderId: "ac2d34cf-34a6-47a2-8b50-65bfa292eeba", purchaseInterestId: "dca40ea0-50c1-44e2-b59b-54478bdb0cc4") {
    orders {
      company {
        name
      }
    }
  }
}
```

# Remove Order

```graphql
mutation removeOrder {
  removeOrderFromPurchaseInterest(orderId: "ac2d34cf-34a6-47a2-8b50-65bfa292eeba", purchaseInterestId: "dca40ea0-50c1-44e2-b59b-54478bdb0cc4") {
    id
  }
}
```

# Find By LeadershipId

```graphql
  query purchaseInterestsByLeadershipId {
  purchaseInterestsByLeadershipId(leadershipId : "f302a518-4d50-41f3-9049-961c1ed005c2"){
    purchaseInterests{
      description
      deadline
      status
      id
    }
  }
}

```
# purchaseInterestJoined

```graphql
query purchaseInterestJoined {
  purchaseInterestJoined(companyId : "f302a518-4d50-41f3-9049-961c1ed005c2")
  {
  	purchaseInterests {
      id
      description
      status
      leadershipId
    }  
    count
  }
  
}

```
# purchaseInterestByNetworkId

```graphql
query purchaseInterestsByNetworkId {
  purchaseInterestsByNetworkId(networkId : "6b75d09d-78d8-47ef-8558-a4bf11e180cb"){
    purchaseInterests{
      leadershipId
      deadline
      description
      id
    }
    count
  }
}

```