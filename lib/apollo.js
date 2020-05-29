import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: process.env.baseUrl,

  request (operation) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.baseKey}`
      }
    })
  }
});

export default apolloClient;
