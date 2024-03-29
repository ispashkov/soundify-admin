import React from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from "./utils/history";
import store from './store';

import { MuiThemeProvider } from '@material-ui/core'
import theme from './theme';

import * as routes from './constants/routes';

import LayoutBase from './containers/BaseLayout';
import ArtistsListContainer from './containers/ArtistsList';
import ArtistsCreateContainer from './containers/ArtistsCreate';
import Albums from './views/Albums';
import Tracks from './views/Tracks';

const App: React.FunctionComponent<{}> = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <LayoutBase>
            <Route path={routes.ARTISTS_LIST} component={ArtistsListContainer} exact />
            <Route path={routes.ARTISTS_CREATE} component={ArtistsCreateContainer} />
            <Route path="/albums" component={Albums} />
            <Route path="/tracks" component={Tracks} />
          </LayoutBase>
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App
