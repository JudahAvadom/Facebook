import React from 'react'
import ReactDom from 'react-dom/client';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:8000/'
    }),
    cache: new InMemoryCache()
})

const Index = () => {
    return (
        <ApolloProvider client={client}>
            <div>
                Hola en React
            </div>
        </ApolloProvider>
    )
}

const root = ReactDom.createRoot(document.getElementById('app'));
root.render(<Index />);