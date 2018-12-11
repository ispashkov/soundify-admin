import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Appbar from '../components/Appbar'
import Sidebar from '../components/Sidebar'

interface S {
	drawer: Boolean
}

class BaseLayout extends Component<{}, S> {
	state = {
		drawer: false
	}
	
	toggleDrawer = (value: boolean) => this.setState({ drawer: value })
	
	render() {
		const { drawer } = this.state

		return (
			<Fragment>
				<CssBaseline />
				<Appbar onClickMenu={() => this.toggleDrawer(!drawer)} />
				<Sidebar open={drawer} onClose={() => this.toggleDrawer(false)} />
				{ this.props.children }
			</Fragment>
		);
  }
}

export default BaseLayout;
