import React, { useState } from 'react';
import { Button, Grid, Card, Modal } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { settingsVisible, userState } from '../recoil/atoms';
import { User } from '../util/types';

export default function SettingsModal(): JSX.Element {
  const [showSettings, setShowSettings] = useRecoilState(settingsVisible);
  const [user, setUser] = useRecoilState(userState);

  const logout = () => {
    const emptyUser: User = {
      id: '',
      userName: '',
      scores: [],
      sponsorId: '',
    };

    setUser(emptyUser);
  };

  return (
    <Modal open={showSettings} onClose={() => setShowSettings(false)}>
      <Grid container style={{ backgroundColor: 'white' }} justify="center">
        <Card style={{ height: 200, width: 200 }}>
          <Button size="large" variant="outlined" onClick={logout}>
            Logout
          </Button>
        </Card>
      </Grid>
    </Modal>
  );
}
