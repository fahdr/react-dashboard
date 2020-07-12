import React from 'react';
import './App.css';
import {NavBar} from './nav/NavBar';
import {InfoSection} from './sections/InfoSection';
import {ChartSection} from './sections/ChartSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <InfoSection />
      <ChartSection />
    </div>
  );
}

export default App;
