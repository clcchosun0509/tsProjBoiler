import {inject, observer} from 'mobx-react';
import * as React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import MainPage from './components/pages/MainPage';
import RegisterPage from './components/pages/RegisterPage';

@inject()
@observer
class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path={'/'} component={MainPage}/>
          <Route exact={true} path={'/register'} component={RegisterPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
