import React from 'react';
import { ApolloProvider,ApolloClient,HttpLink,ApolloLink,InMemoryCache } from '@apollo/client';
// import fetch from 'node-fetch';
import { graphql_endpoint } from '../constants/graphqlApi'
const httpLink = new HttpLink({ uri:'http://localhost:9000/api' });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDYsImlhdCI6MTY1MjE1ODkxMX0.l5Jzps98vI_-eiIDyVUDMLs3TxU_XxBOi_HQMwv4N_Y`;

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});
// const client=new ApolloClient({
//     cache: new InMemoryCache(),
//         link: authLink.concat(httpLink),
// });
const client = new ApolloClient({
  uri: 'http://localhost:9000/api',
  cache: new InMemoryCache()
});
const ApolloClientLayout=({children})=>{
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}
export default ApolloClientLayout