import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { settingsVisible } from '../recoil/atoms';
import { AccountCircle, ExitToAppOutlined, Settings } from '@material-ui/icons';

export default function Header(): JSX.Element {
  const setShowSettings = useSetRecoilState(settingsVisible);
  const history = useHistory();
  const location = useLocation();

  return (
    <Grid container direction="row" className="navHeader" xs={12} justify="space-between">
      <Grid container direction="row" xs={4} justify="flex-start" alignItems="center">
        {location.pathname === '/' ? (
          <IconButton className="navBtn backBtn" size="medium" focusRipple>
            <AccountCircle />
          </IconButton>
        ) : (
          <IconButton
            className="navBtn backBtn"
            size="medium"
            focusRipple
            onClick={() => {
              if (location.pathname === '/game' && !confirm('This will abandon the current game. Are you sure?'))
                return;
              history.push('/main');
            }}
          >
            <ExitToAppOutlined />
          </IconButton>
        )}
      </Grid>

      <Grid container direction="row" xs={4} justify="center" alignItems="center">
        <h1>Bayer Cricket Trivia</h1>
      </Grid>

      <Grid container direction="row" xs={4} justify="flex-end" alignItems="center">
        <IconButton size="medium" focusRipple onClick={() => setShowSettings(true)}>
          <Settings />
        </IconButton>
      </Grid>
    </Grid>
  );
}
