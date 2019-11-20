import React from 'react';

import { withStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';
import styles from './styles';

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Grid
      container
      justify="center"
      align="center"
      className={classes.container}
    >
      <Grid item xs="12" lg="4">
        <Typography variant="h4">Opening Hours</Typography>
        <Typography variant="body2">Wednesday: 1700 - 2230</Typography>
        <Typography variant="body2">Thursday: 1700 - 2230</Typography>
        <Typography variant="body2">Friday: 1700 - 2330</Typography>
        <Typography variant="body2">Saturday: 1200 - 2330</Typography>
        <Typography variant="body2">Sunday: 1200 - 2130</Typography>
      </Grid>

      <Grid item xs="12" lg="4">
        <Typography variant="h4">Food Hours</Typography>
        <Typography variant="body2">Thursday: 1730 - 2100</Typography>
        <Typography variant="body2">Friday: 1730 - 2100</Typography>
        <Typography variant="body2">
          Saturday: 1200 - 1500 / 1730 - 2100
        </Typography>
        <Typography variant="body2">Sunday: 1200 - 1500</Typography>
      </Grid>

      <Grid item xs="12" lg="4">
        <div className={classes.logo} />
      </Grid>
    </Grid>

    <Grid
      container
      className={(classes.container, classes.copy)}
      justify="center"
      align="center"
    >
      <Grid item xs="12" lg="6">
        <Typography variant="h5">Developed By - Aaron Duke</Typography>
      </Grid>

      <Grid item xs="12" lg="6">
        <Typography variant="h5">The Little Kitchen Pantry Ltd 2019</Typography>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Footer);
