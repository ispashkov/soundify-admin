import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme';

import LayoutBase from './containers/BaseLayout';
import Artists from './views/Artists';
import Albums from './views/Albums';
import Tracks from './views/Tracks';

const App: React.FunctionComponent<{}> = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <LayoutBase>
            <Route path="/artists" component={Artists} />
            <Route path="/albums" component={Albums} />
            <Route path="/tracks" component={Tracks} />
          </LayoutBase>
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App
