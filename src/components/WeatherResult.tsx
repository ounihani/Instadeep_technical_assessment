import * as React from 'react';
import Grid from '@mui/material/Grid';
import WeatherCard from './WeatherCard';
import { useSelector } from 'react-redux';
import { RootState } from "../store/store";



export default function WeatherResult() {
    const { WeatherList, loading } = useSelector((state: RootState) => state.weather)

    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            spacing={2}

        >

            <Grid item >
                back
            </Grid>

            {WeatherList.map((dayWeather) => (
                <Grid item
                    justifyContent="center"
                    alignItems="center"
                    key={dayWeather.id}
                >
                    <WeatherCard

                        id={dayWeather.id}
                        day={dayWeather.day}
                        temperature={dayWeather.temperature}
                        icon={dayWeather.icon}
                        condition={dayWeather.condition}
                        description={dayWeather.description}
                    />
                </Grid>
            ))}

            <Grid item >
                next
            </Grid>
        </Grid>

    );
}