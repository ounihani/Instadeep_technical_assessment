import './App.css';
import { AppHeader } from './components/AppHeader';
import TemperatureSelector from './components/TemperatureSelector';
import WeatherResult from './components/WeatherResult';
import { AppDispatch, RootState, store } from "./store/store"
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchWeatherAction } from './store/weatherSlice';


function App() {

  const dispatch = useDispatch<AppDispatch>()
  const { WeatherList, loading } = useSelector((state: RootState) => state.weather)

  useEffect(() => {
    dispatch(fetchWeatherAction())
  }, [])

  WeatherList.map((daysWeather) => {
    console.log("from component", daysWeather);
  })
  // console.log("from component", WeatherList);


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


const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWrapper;
