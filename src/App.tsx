import React from 'react';
import './App.css';
import LandingPage from './components/pages/LandingPage';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MainMenu from './components/pages/MainMenu';
import Gameplay from './components/pages/Gameplay';
import Header from './components/Header';

function App() {
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
    </RecoilRoot>
  );
}

export default App;
