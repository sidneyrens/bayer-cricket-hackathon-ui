import { Option } from './types';
import { Button, Grid } from '@material-ui/core';
import React from 'react';
import * as R from 'ramda';

export function createOptionBtn(onClick, option: Option): JSX.Element {
  return (
    <Grid key={option.id} container xs={6} justify="center" alignItems="center" style={{ minHeight: '22.5vh' }}>
      <Button {...{ onClick: onClick.bind(null, option.id) }} size="large" variant="outlined" className="answerBtn">
        <h1>{option.answer}</h1>
      </Button>
    </Grid>
  );
}

export function callEach(...args) {
  args.forEach((arg) => {
    (typeof arg === 'function' ? arg : R.identity)(undefined);
  });
}

export function comingSoon() {
  alert('Coming soon!™');
}
