import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UserIcon from '@material-ui/icons/People';
import AlbumIcon from '@material-ui/icons/Album';
import AudioIcon from '@material-ui/icons/Audiotrack';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
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
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  link: {
    textDecoration: 'none'
  }
});

interface P extends WithStyles<typeof styles> {
  open: boolean,
  onClose(e: React.SyntheticEvent<HTMLElement>): void,
  classes: {
    root: string,
    drawerPaper: string,
    drawerHeader: string,
    link: string
  }
}

const Sidebar: React.FunctionComponent<P> = ({ open, onClose, classes }) => (
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
    <div className={classes.drawerHeader}>
      <IconButton onClick={onClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
    <List>
      { menu.map((item, idx) => (
        <Link to={item.link} key={idx} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              { React.createElement(item.icon) }
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </Link>
      ))}
    </List>
  </Drawer>
);

export default withStyles(styles)(Sidebar)
