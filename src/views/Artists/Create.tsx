import React, { Component } from "react";
import {Link} from "react-router-dom";
import Button, {ButtonProps} from "@material-ui/core/Button";
import {withStyles, WithStyles, Theme, createStyles} from "@material-ui/core/styles";
import Page from "../../containers/Page";
import Form from "../../components/ArtistsForm";
import * as routes from "../../constants/routes";
import roles from "../../constants/roles";
import { ArtistData } from "../../interfaces";

const styles = (theme: Theme) => createStyles({
  root: {
    maxWidth: 600,
    margin: "0 auto"
  },
  btnCancel: {
    marginRight: theme.spacing.unit * 2
  }
});

const CancelLink: React.FunctionComponent<ButtonProps> = (props: any) => (
  <Link to={routes.ARTISTS_LIST} {...props} />
);

interface P extends WithStyles<typeof styles>{
  classes: {
    root: string,
    btnCancel: string
  },
  createArtist(fields: ArtistData): void
}

interface S {
  fields: ArtistData
}

class ArtistCreate extends Component<P, S> {
  state = {
    fields: {
      userName: "",
      email: "",
      password: "",
      role: roles.ARTIST
    }
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const { fields } = this.state;
    this.setState({
      fields: {
        ...fields,
        [name]: value
      }
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { fields } = this.state;
    const { createArtist } = this.props;

    createArtist(fields);
  };

  render() {
    const { fields } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Page title="Create Artist">
          <Form {...fields} onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <Button
              className={classes.btnCancel}
              component={CancelLink}
              variant="contained"
              color="secondary"
              aria-label="Cancel"
              size="large"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              aria-label="Create"
              size="large"
            >
              Create
            </Button>
          </Form>
        </Page>
      </div>
    )
  }
}

export default withStyles(styles)(ArtistCreate);
