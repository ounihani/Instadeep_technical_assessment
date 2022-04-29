import React from 'react';
import './App.css';
import { AppHeader } from './components/AppHeader';
import TemperatureSelector from './components/TemperatureSelector';



function App() {
  return (
    <>
      <div className="App">
        <AppHeader />
      </div>
      <TemperatureSelector />
      {/* <WeatherCards /> */}
    </>

  );
}

export default App;
