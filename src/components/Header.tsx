import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { gameStatus, settingsVisible } from '../recoil/atoms';
import { AccountCircle, ExitToAppOutlined, Settings } from '@material-ui/icons';
import { selectGameState, userLoggedIn } from '../recoil/selectors';
import { GameStatus } from '../util/types';

export default function Header(): JSX.Element {
  const setShowSettings = useSetRecoilState(settingsVisible);
  const currentGameStatus = useRecoilValue(gameStatus);
  const history = useHistory();
  const location = useLocation();
  const resetGameState = useResetRecoilState(selectGameState);
  const isLoggedIn = useRecoilValue(userLoggedIn);
  const logOut = useResetRecoilState(userLoggedIn);

  return (
    <Grid container direction="row" className="navHeader" xs={12} justify="space-between">
      <Grid container direction="row" xs={4} justify="flex-start" alignItems="center">
        {location.pathname === '/' ? (
          isLoggedIn ? (
            <IconButton title="Logout" className="navBtn backBtn" size="medium" focusRipple>
              <AccountCircle onClick={logOut} />
            </IconButton>
          ) : null
        ) : (
          <IconButton
            className="navBtn backBtn"
            size="medium"
            focusRipple
            onClick={() => {
              if (
                location.pathname === '/game' &&
                currentGameStatus === GameStatus.IN_PROGRESS &&
                !confirm('This will abandon the current game. Are you sure?')
              )
                return;
              history.push('/');
              resetGameState();
            }}
          >
            <ExitToAppOutlined />
          </IconButton>
        )}
      </Grid>

      <Grid container direction="row" xs={4} justify="center" alignItems="center">
        <h1>United Way Bayer Cricket Trivia</h1>
      </Grid>

      <Grid container direction="row" xs={4} justify="flex-end" alignItems="center">
        {isLoggedIn && (
          <IconButton size="medium" focusRipple onClick={() => setShowSettings(true)}>
            <Settings />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
}
