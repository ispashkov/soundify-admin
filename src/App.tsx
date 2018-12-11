import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import LayoutBase from './layouts/Base'
import Artists from './views/Artists'
import Albums from './views/Albums'
import Tracks from './views/Tracks'

const App = () => (
	<Provider store={store}>
		<Router>
			<Switch>
				<LayoutBase>
					<Route path="/artists" component={Artists} />
					<Route path="/albums" component={Albums} />
					<Route path="/tracks" component={Tracks} />
				</LayoutBase>
			</Switch>
		</Router>
	</Provider>
)

export default App;
