import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { settingsVisible } from '../recoil/atoms';

export default function Header(): JSX.Element {
  const setShowSettings = useSetRecoilState(settingsVisible);
  const history = useHistory();

  return (
    <Grid container className="navHeader" xs={12} justify="space-between">
      <Button
        size="large"
        variant="outlined"
        onClick={() => history.push('/main')}
        // hidden={history.location.pathname === '/'}
      >
        Back
      </Button>
      <h1>Bayer Cricket Trivia</h1>
      <Button size="large" variant="outlined" onClick={() => setShowSettings(true)}>
        Settings
      </Button>
    </Grid>
  );
}
