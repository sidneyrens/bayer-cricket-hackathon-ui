import React, { useRef } from 'react';
import './App.scss';
import LandingPage from './components/pages/LandingPage';
import { useRecoilValue } from 'recoil';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MainMenu from './components/pages/MainMenu';
import Gameplay from './components/pages/Gameplay';
import Header from './components/Header';
import { userLoggedIn } from './recoil/selectors';

export default function App(): JSX.Element {
  const loggedIn = useRecoilValue(userLoggedIn);
  const appBodyRef = useRef(null);

  return (
    <Router>
      <Grid container className="App" direction="column" ref={appBodyRef}>
        <Header />
        <Grid container className="contentContainer">
          <Switch>
            <Route path="/game" component={Gameplay} />
            <Route exact path="/" render={() => (loggedIn ? <MainMenu /> : <LandingPage />)} />
            <Redirect path="*" to="/" />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}
