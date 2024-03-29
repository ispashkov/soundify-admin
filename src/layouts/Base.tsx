import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles, createStyles, WithStyles } from '@material-ui/core/styles'
import Appbar from '../components/Appbar'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const styles = () => createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: '100vh'
  }
});

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
  };

  toggleDrawer = (value: boolean) => this.setState({ drawer: value });

  render() {
    const { classes, title } = this.props;
    const { drawer } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Appbar title={title} open={drawer} onClickMenu={() => this.toggleDrawer(!drawer)} />
        <Sidebar open={drawer} onClose={() => this.toggleDrawer(false)} />
        <Content open={drawer}>
          { this.props.children }
        </Content>
      </div>
    );
  }
}

export default withStyles(styles)(BaseLayout);
