import React from "react";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import { withStyles, Theme, WithStyles, createStyles } from "@material-ui/core/styles"

const styles = (theme: Theme) => createStyles({
  btnContainer: {
    marginTop: theme.spacing.unit * 3
  }
});

interface P extends WithStyles<typeof styles>{
  userName: string,
  email: string,
  password: string,
  onChange(e: React.ChangeEvent<HTMLInputElement>): void,
  onSubmit(e: React.FormEvent<HTMLFormElement>): void,
  classes: {
    btnContainer: string
  }
}

const ArtistsForm: React.FunctionComponent<P> = ({ userName, email, password, onChange, onSubmit, children, classes }) => (
  <form onSubmit={(e) => onSubmit(e)} autoComplete="off">
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <TextField
          label="Name"
          name="name"
          placeholder="Name"
          defaultValue={userName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          autoComplete="off"
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          defaultValue={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          autoComplete="off"
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          defaultValue={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          autoComplete="off"
          required
          fullWidth
        />
      </Grid>
    </Grid>
    <Grid className={classes.btnContainer} container spacing={24} justify="flex-end">
      <Grid item>
        { children }
      </Grid>
    </Grid>
  </form>
);

export default withStyles(styles)(ArtistsForm)
