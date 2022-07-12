import React from 'react'
import reactDom from 'react-dom'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-carlos-carlosdev88.vercel.app/graphql',
  cache: new InMemoryCache()
})

reactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
