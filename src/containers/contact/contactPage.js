import React from 'react';

import {
 Typography, Grid, Button, Fade 
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ContactPage = ({ classes }) => (
  <Grid container className={classes.container} justify="center" align="center">
    <Fade in timeout={2000}>
      <Grid item xs="10">
        <Typography variant="h2">Contact Us</Typography>
      </Grid>
    </Fade>
    <Grid item xs="10">
      <Typography variant="body2">
        If you have any queries, please do not hesitate to contact us. We are
        always happy to help.
      </Typography>
    </Grid>
    <Grid item xs="10">
      <Typography variant="h4">Phone</Typography>
      <Typography variant="body1">01760 788101</Typography>
    </Grid>
    <Grid item xs="10">
      <Typography variant="h4">Email</Typography>
      <Typography variant="body1">info@squirrelsdrey.co.uk</Typography>
      <Button
        size="large"
        variant="contained"
        href="mailto: info@squirrelsdrey.co.uk"
      >
        Click To Email
      </Button>
    </Grid>
    <Grid item xs="10">
      <Typography variant="h4">Address</Typography>
      <Typography variant="body1">The Squirrels Drey</Typography>
      <Typography variant="body1">70 The Street</Typography>
      <Typography variant="body1">Sporle</Typography>
      <Typography variant="body1">Kings Lynn</Typography>
      <Typography variant="body1">PE32 2DR</Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(ContactPage);
