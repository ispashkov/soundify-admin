import React, { Component } from 'react'
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { WithStyles	} from '@material-ui/core'
import { withStyles, createStyles } from '@material-ui/core/styles'
import Appbar from '../components/Appbar'
import Sidebar from '../components/Sidebar'
import Page from '../components/Page'

const styles = () => createStyles({
	root: {
		minHeight: '100vh'
	}
})
interface S {
	drawer: Boolean
}

interface P extends WithStyles<typeof styles> {
	classes: {
		root: string
	},
	title: string
}

class BaseLayout extends Component<P, S> {
	state = {
		drawer: false
	}
	
	toggleDrawer = (value: boolean) => this.setState({ drawer: value })
	
	render() {
		const { classes, title } = this.props
		const { drawer } = this.state

		return (
			<div className={classes.root}>
				<CssBaseline />
				<Appbar title={title} onClickMenu={() => this.toggleDrawer(!drawer)} />
				<Sidebar open={drawer} onClose={() => this.toggleDrawer(false)} />
				<Page>
					{ this.props.children }
				</Page>
			</div>
		);
  }
}

const mapStateToProps = (state: any) => ({
	title: state.layout.pageTitle
})

export default withStyles(styles)(connect(mapStateToProps)(BaseLayout));
