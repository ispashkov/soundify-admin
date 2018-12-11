import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LayoutBase from './layouts/Base'
import Artists from './views/Artists'

const App = () => (
	<Router>
		<LayoutBase>
			<Switch>
				<Route path="/artists" exact component={Artists} />
			</Switch>
		</LayoutBase>
	</Router>
)

export default App;
