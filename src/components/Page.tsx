import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";

const styles = (theme: Theme) => createStyles({
  root: {
    width: "100%",
    maxWidth: 1170,
    margin: "0 auto",
    padding: theme.spacing.unit * 3
  },
  loadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
    width: "100%",
    height: "100%"
  }
});

interface P extends WithStyles<typeof styles> {
  children?: React.ReactNode
  changeTitle(title: string): void,
  title: string,
  isLoading?: boolean
  classes: {
    root: string,
    loadingContainer: string
  }
}
class Page extends Component<P, {}> {
  componentDidMount() {
    const { title, changeTitle } = this.props;
    changeTitle(title)
  }

  render() {
    const { classes, children, isLoading } = this.props;

    if (isLoading) return (
      <div className={classes.loadingContainer}>
        <CircularProgress/>
      </div>
    );

    return (
      <Paper className={classes.root} elevation={1}>
        { children }
      </Paper>
    )
  }
}

export default withStyles(styles)(Page)
