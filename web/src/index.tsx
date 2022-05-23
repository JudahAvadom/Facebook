import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import App from './App'

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:8000/'
    }),
    cache: new InMemoryCache()
})

const el = document.getElementById('app')
if (el === null) throw new Error('Root container missing in index.html')
const root = ReactDOM.createRoot(el)
root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);