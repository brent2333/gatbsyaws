import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"

import { InMemoryCache } from "apollo-cache-inmemory"

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-api-key": "da2-mr2wq2qc4bdo7ca4dy6mcv7y4y",
    },
  }
})
const httpLink = createHttpLink({
  uri:
    "https://rvlluilwtjeqxgqqtztspec2fi.appsync-api.us-east-2.amazonaws.com/graphql",
})

// export const client = new ApolloClient({
//   uri:
//     "https://rvlluilwtjeqxgqqtztspec2fi.appsync-api.us-east-2.amazonaws.com/graphql",
//   fetch,
//   headers: {
//     ...headers,
//     "x-api-key": "da2-mr2wq2qc4bdo7ca4dy6mcv7y4y",
//   },
// })

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
