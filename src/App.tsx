import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/pages/LandingPage';
import Gameplay from './components/pages/Gameplay';
import MainMenu from './components/pages/MainMenu';

function App() {
    return (
        <div className="App">
            <MainMenu />
        </div>
    );
}

export default App;
