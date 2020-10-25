import React from 'react';
import { Grid } from '@material-ui/core';

export default function Header(): JSX.Element {
  return (
    <Grid
      container
      className="navHeader"
      xs={12}
      justify="space-between"
      style={{ backgroundColor: 'rgba(240, 240, 240, 0.34)' }}
    >
      <h1>Back</h1>
      <h1>Bayer Cricket Trivia</h1>
      <h1>Settings</h1>
    </Grid>
  );
}
