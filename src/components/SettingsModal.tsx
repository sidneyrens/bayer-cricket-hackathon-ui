import React from 'react';
import { Button, Card, Grid, Modal } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { settingsVisible, userState } from '../recoil/atoms';
import { User } from '../util/types';
import { comingSoon } from '../util/helpers';
import { useHistory } from 'react-router';

interface SettingsModalProps {
  ref?: React.RefObject<any>;
}

export default function SettingsModal({ ref }: SettingsModalProps): JSX.Element {
  const [showSettings, setShowSettings] = useRecoilState(settingsVisible);
  const [user, setUser] = useRecoilState(userState);
  const history = useHistory();

  const closeModal = () => setShowSettings(false);

  const logout = () => {
    const emptyUser: User = {
      id: '',
      userName: '',
      scores: [],
      sponsorId: '',
    };

    setUser(emptyUser);
    closeModal();
    history.push('/');
  };

  return (
    <Modal ref={ref} open={showSettings} onClose={closeModal}>
      <Grid
        id="modalContainer"
        container
        className="modalContainer"
        justify="center"
        alignItems="center"
        onClick={closeModal}
      >
        <Card className="modalBody column spread" onClick={(e) => e.stopPropagation()}>
          <Button size="large" variant="outlined" onClick={comingSoon}>
            Options
          </Button>
          <Button size="large" variant="outlined" onClick={logout}>
            Logout
          </Button>
        </Card>
      </Grid>
    </Modal>
  );
}
