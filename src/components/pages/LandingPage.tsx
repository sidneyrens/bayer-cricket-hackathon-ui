import React from 'react';
import Login from '../Login';
import { Grid } from '@material-ui/core';

export default function LandingPage() {
  return (
    <Grid container justify="center" alignItems="center" direction="column" style={{ height: '90vh' }}>
      <Grid container>
        <Login />
      </Grid>
    </Grid>
  );
}
