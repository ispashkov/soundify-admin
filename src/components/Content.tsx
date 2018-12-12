import React from 'react';
import { WithStyles	} from '@material-ui/core';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing.unit * 5
  }
});

interface P extends WithStyles<typeof styles> {
  children?: React.ReactNode
  classes: {
    root: string
  }
}

const Content: React.FunctionComponent<P> = ({ children, classes }) => (
  <div className={classes.root}>
    { children }
  </div>
);

export default withStyles(styles)(Content)
