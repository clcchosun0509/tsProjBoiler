import {Provider} from 'mobx-react';
import * as React from 'react';
import { ApolloProvider } from "react-apollo";
import App from './app/App';
import apolloClient from './lib/graphQL/apolloClient';

const stores = {
  // TO DO LIST
};

const Root = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider {...stores}>
        <App/>
      </Provider>
    </ApolloProvider>
  );
};

export default Root;