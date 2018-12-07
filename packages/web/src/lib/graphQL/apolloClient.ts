import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from "apollo-client";
import {ApolloLink} from 'apollo-link';
import {onError} from 'apollo-link-error';
import {createHttpLink} from 'apollo-link-http';

const httpLink = createHttpLink({
  credentials: 'include',
  uri: 'http://localhost:4000',
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    onError(({graphQLErrors, networkError}) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          console.log('[GraphQL Error] : ', err);
        }
      }
      if (networkError) {
        console.log('[Network Error] : ', networkError);
      }
    }),
    httpLink
  ]),
});

export default apolloClient;