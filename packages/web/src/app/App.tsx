import {inject, observer} from 'mobx-react';
import * as React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import MainPage from './components/pages/MainPage';

@inject()
@observer
class App extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path={'/'} component={MainPage}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
