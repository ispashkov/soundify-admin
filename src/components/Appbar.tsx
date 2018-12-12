import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

interface P {
  title: string,
  onClickMenu(e: React.MouseEvent<HTMLElement>): void
}

class Appbar extends Component<P> {
  render() {
    const { onClickMenu, title } = this.props;

    return (
      <AppBar position="static">
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

export default Appbar
