import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

const comingSoon = () => alert('Coming soon!™');

export default function MainMenu() {
  const history = useHistory();
  return (
    <Grid container className="mainMenu" direction="column" justify="space-evenly" alignItems="center">
      <Button size="large" variant="outlined" className="answerBtn mainMenuBtn" onClick={() => history.push('/game')}>
        Play
      </Button>
      <Button size="large" variant="outlined" className="answerBtn mainMenuBtn" onClick={comingSoon}>
        Leaderboards
      </Button>
      <Button size="large" variant="outlined" className="answerBtn mainMenuBtn" onClick={comingSoon}>
        About
      </Button>
    </Grid>
  );
}
