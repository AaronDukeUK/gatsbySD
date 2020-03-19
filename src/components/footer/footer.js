import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import logo from "../../images/logo.svg";
import styles from "./styles";

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
        <Typography variant="body2">Wednesday: 1700 - CL</Typography>
        <Typography variant="body2">Thursday: 1700 - CL</Typography>
        <Typography variant="body2">Friday: 1700 - CL</Typography>
        <Typography variant="body2">Saturday: 1200 - CL</Typography>
        <Typography variant="body2">Sunday: 1200 - CL</Typography>
      </Grid>

      <Grid item xs="12" lg="4">
        <Typography variant="h4">Food Served</Typography>
        <Typography variant="body2">Thursday: 1700 - 2100</Typography>
        <Typography variant="body2">Friday: 1700 - 2100</Typography>
        <Typography variant="body2">Saturday: 1700 - 2100</Typography>
        <Typography variant="body2">Sunday: 1200 - 1500</Typography>
      </Grid>

      <Grid item xs="12" lg="4">
        <img className={classes.logo} src={logo} alt="Logo" />
      </Grid>
    </Grid>

    <Grid container className={classes.copy} justify="center" align="center">
      <Grid item xs="11" lg="5">
        {/* <a href="#"> */}
        <Typography variant="h5" className={classes.copyText}>
          Web Design By Aaron Duke
        </Typography>
        {/* </a> */}
      </Grid>
      <Grid item xs="11" lg="5">
        <Typography variant="h5" className={classes.copyText}>
          The Little Kitchen Pantry Ltd 2019 &copy;
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Footer);
