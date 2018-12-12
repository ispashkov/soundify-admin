import React, { Component } from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const styles = (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing.unit * 3
  }
});

interface P extends WithStyles<typeof styles> {
  children?: React.ReactNode
  changeTitle(title: string): void,
  title: string,
  classes: {
    root: string
  }
}
class Page extends Component<P, {}> {
  componentDidMount() {
    const { title, changeTitle } = this.props;
    changeTitle(title)
  }

  render() {
    const { classes, children} = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        { children }
      </Paper>
    )
  }
}

export default withStyles(styles)(Page)
