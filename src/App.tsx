import React from 'react';
import './App.css';
import LandingPage from './components/pages/LandingPage';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainMenu from './components/pages/MainMenu';
import Gameplay from './components/pages/Gameplay';

function App() {
    return (
        <RecoilRoot>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/main" component={MainMenu} />
                        <Route path="/game" component={Gameplay} />
                        <Route exact path="/" component={LandingPage} />
                        <Redirect path="*" to="/" />
                    </Switch>
                </div>
            </Router>
        </RecoilRoot>
    );
}

export default App;
