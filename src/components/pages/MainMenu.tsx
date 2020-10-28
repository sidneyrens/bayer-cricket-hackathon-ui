import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import { comingSoon } from '../../util/helpers';
import { useRecoilState } from 'recoil';
import { aboutVisible, userState } from '../../recoil/atoms';
import AboutModal from '../AboutModal';

export default function MainMenu() {
  const history = useHistory();
  const [showAbout, setShowAbout] = useRecoilState(aboutVisible);

  return (
    <Grid container className="mainMenu" direction="column" justify="space-evenly" alignItems="center">
      <Button size="large" variant="outlined" className="answerBtn mainMenuBtn" onClick={() => history.push('/game')}>
        Play
      </Button>
      <Button size="large" variant="outlined" className="answerBtn mainMenuBtn" onClick={comingSoon}>
        Leaderboards
      </Button>
      <Button
        size="large"
        variant="outlined"
        className="answerBtn mainMenuBtn"
        onClick={() => {
          setShowAbout(true);
        }}
      >
        About
      </Button>
      <AboutModal />
    </Grid>
  );
}
