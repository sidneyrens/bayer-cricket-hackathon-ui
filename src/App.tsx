import React from 'react';
import './App.css';
import LandingPage from './components/pages/LandingPage';
import { RecoilRoot } from 'recoil';

function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <LandingPage />
            </div>
        </RecoilRoot>
    );
}

export default App;
