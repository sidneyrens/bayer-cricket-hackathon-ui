import React, {useState} from 'react';
import './App.css';
import Login from './components/login'
import {RecoilRoot} from 'recoil';


function App() {
  return (
    <RecoilRoot>
      <Login></Login>  
    </RecoilRoot>
  );
}

export default App;
