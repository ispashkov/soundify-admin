import React from 'react'
import Paper from '@material-ui/core/Paper'
import { WithStyles	} from '@material-ui/core'
import { withStyles, Theme, createStyles } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({
	root: {
		flex: 1,
		padding: theme.spacing.unit * 5
	},
	paper: {
		padding: theme.spacing.unit * 3
	}
})

interface P extends WithStyles<typeof styles> {
	children?: React.ReactNode
	classes: {
		root: string,
		paper: string
	}
}

const Content: React.SFC<P> = ({ children, classes }) => (
	<div className={classes.root}>
		<Paper className={classes.paper} elevation={1}>
			{ children }
		</Paper>
	</div>
)

export default withStyles(styles)(Content)