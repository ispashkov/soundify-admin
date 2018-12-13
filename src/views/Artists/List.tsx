import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button, {ButtonProps} from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withStyles, Theme, createStyles, WithStyles} from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Page from '../../containers/Page';
import * as routes from "../../constants/routes";

const styles = (theme: Theme) => createStyles({
  grid: {
    marginBottom: theme.spacing.unit * 2
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.dark, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.dark
  },
  inputRoot: {
    color: theme.palette.primary.dark,
    width: '100%',
    height: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  loadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: theme.spacing.unit * 50
  }
});

interface Artist {
  _id: string,
  userName: string,
  email: string
}

interface P extends WithStyles<typeof styles> {
  classes: {
    grid: string,
    search: string,
    searchIcon: string,
    inputRoot: string,
    inputInput: string,
    loadingContainer: string
  },
  getArtists(): void,
  artists: Artist[],
  isLoading: boolean
}

const CreateLink: React.FunctionComponent<ButtonProps> = (props: any) => <Link to={routes.ARTISTS_CREATE} {...props}/>;

class Artists extends Component<P> {
  componentDidMount(): void {
    this.props.getArtists()
  }

  render() {
    const { classes, artists, isLoading } = this.props;

    return (
      <Page title="Artists">

        <Grid container spacing={16} className={classes.grid}>
          <Grid item xs={8} container alignItems="center">
            <Button
              component={CreateLink}
              variant="contained"
              color="primary"
              aria-label="Create"
              size="large"
            >
              <AddIcon/>
              Create
            </Button>
          </Grid>
          <Grid item xs={4} container justify={"flex-end"}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Grid>
        </Grid>
        { isLoading && (
          <div className={classes.loadingContainer}>
            <CircularProgress/>
          </div>
        ) }
        { !isLoading && (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>NAME</TableCell>
                <TableCell>EMAIL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { artists.map((artist, idx) => (
                <TableRow key={idx}>
                  <TableCell>{ artist.userName || ("—") }</TableCell>
                  <TableCell>{ artist.email || ("—") }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        )}

      </Page>
    )
  }
}

export default withStyles(styles)(Artists)
