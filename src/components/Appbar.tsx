import React, { Component } from 'react';
import classNames from "classnames";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";

const styles = (theme: Theme & ThemeOptions) => createStyles({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: theme.drawerWidth,
  },
});

interface P extends WithStyles<typeof styles> {
  title: string,
  onClickMenu(e: React.MouseEvent<HTMLElement>): void,
  classes: {
    appBar: string,
    appBarShift: string
  },
  open: boolean
}

class Appbar extends Component<P> {
  render() {
    const { onClickMenu, title, classes, open } = this.props;

    return (
      <AppBar
        position="static"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={onClickMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Appbar)
