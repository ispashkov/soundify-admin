import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UserIcon from '@material-ui/icons/People';
import AlbumIcon from '@material-ui/icons/Album';
import AudioIcon from '@material-ui/icons/Audiotrack';
import {withStyles, createStyles, WithStyles, Theme} from '@material-ui/core/styles'
import {ThemeOptions} from "@material-ui/core/styles/createMuiTheme";

const menu = [
  {
    label: 'Исполнители',
    link: '/artists',
    icon: UserIcon
  },
  {
    label: 'Альбомы',
    link: '/albums',
    icon: AlbumIcon
  },
  {
    label: 'Треки',
    link: '/tracks',
    icon: AudioIcon
  }
];

const styles = (theme: Theme & ThemeOptions) => createStyles({
  root: {
    width: theme.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.drawerWidth,
  },
});

interface P extends WithStyles<typeof styles> {
  open: boolean,
  onClose(e: React.SyntheticEvent<HTMLElement>): void,
  history: {
    push: any
  },
  classes: {
    root: string,
    drawerPaper: string
  }
}

class Sidebar extends Component<P & RouteComponentProps> {

  handleClick = (e: React.SyntheticEvent<HTMLElement>, link: string) => {
    this.props.history.push(link)
    // this.props.onClose(e)
  };

  render() {
    const { open, onClose, classes } = this.props;

    return (
      <Drawer
        anchor="left"
        variant={"persistent"}
        open={open}
        onClose={onClose}
        className={classes.root}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          { menu.map((item, idx) => (
            <ListItem button key={idx} onClick={(e) => this.handleClick(e, item.link)}>
              <ListItemIcon>
                { React.createElement(item.icon) }
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
  }
}

export default withStyles(styles)(withRouter(Sidebar))
