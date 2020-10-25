import React from 'react';
import './App.scss';
import LandingPage from './components/pages/LandingPage';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MainMenu from './components/pages/MainMenu';
import Gameplay from './components/pages/Gameplay';
import Header from './components/Header';
import SettingsModal from './components/SettingsModal';

export default function App(): JSX.Element {
  return (
    <RecoilRoot>
      <Router>
        <Grid container className="App" direction="column">
          <Header />
          <Switch>
            <Route path="/main" component={MainMenu} />
            <Route path="/game" component={Gameplay} />
            <Route exact path="/" component={LandingPage} />
            <Redirect path="*" to="/" />
          </Switch>
        </Grid>
      </Router>
      <SettingsModal />
    </RecoilRoot>
  );
}
