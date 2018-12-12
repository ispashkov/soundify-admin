import React from 'react';
import classNames from 'classnames';
import { WithStyles	} from '@material-ui/core';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";

const styles = (theme: Theme & ThemeOptions) => createStyles({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: theme.drawerWidth,
  },
});

interface P extends WithStyles<typeof styles> {
  children?: React.ReactNode
  classes: {
    content: string,
    contentShift: string
  },
  open: boolean
}

const Content: React.FunctionComponent<P> = ({ children, classes, open }) => (
  <main className={classNames(classes.content, {
    [classes.contentShift]: open,
  })}>
    { children }
  </main>
);

export default withStyles(styles)(Content)
