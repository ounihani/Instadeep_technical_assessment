import React from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader';
import TemperatureSelector from './components/TemperatureSelector';
import WeatherResult from './components/WeatherResult';



function App() {
  return (
    <>
      <div className="App">
        <AppHeader />
      </div>
      <TemperatureSelector />
      <WeatherResult />
    </>

  );
}

export default App;
