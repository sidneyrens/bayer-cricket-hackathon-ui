import React, { useState } from 'react';
import { Button, Grid, Modal } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { settingsVisible } from '../recoil/atoms';

export default function SettingsModal(): JSX.Element {
  const [showSettings, setShowSettings] = useRecoilState(settingsVisible);

  return (
    <Modal open={showSettings} onClose={() => setShowSettings(false)}>
      <Grid container style={{ backgroundColor: 'white' }}>
        <h1>Modal content!</h1>
      </Grid>
    </Modal>
  );
}
