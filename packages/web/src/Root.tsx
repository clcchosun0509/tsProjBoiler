import {Provider} from 'mobx-react';
import * as React from 'react';
import App from './app/App';

const stores = {
  // TO DO LIST
};

const Root = () => {
  return (
    <Provider {...stores}>
      <App/>
    </Provider>
  );
};

export default Root;