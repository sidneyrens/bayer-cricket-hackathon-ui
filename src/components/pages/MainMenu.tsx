import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

export default function MainMenu() {
  const history = useHistory();
  return (
    <Grid container className="mainMenu" direction="column" justify="space-evenly" alignItems="center">
      <Button size="large" variant="outlined" className="answerBtn mainMenuBtn" onClick={() => history.push('/game')}>
        Play
      </Button>
      <Button size="large" variant="outlined" className="answerBtn mainMenuBtn">
        Options
      </Button>
      <Button size="large" variant="outlined" className="answerBtn mainMenuBtn">
        Leaderboards
      </Button>
    </Grid>
  );
}
