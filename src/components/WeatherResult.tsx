import Grid from '@mui/material/Grid';
import WeatherCard from './WeatherCard';
import { useSelector } from 'react-redux';
import { RootState } from "../store/store";
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const WeatherIcon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`;


export default function WeatherResult() {
    let [weatherIndex, setWeatherIndex] = useState(0);
    const { WeatherList, loading } = useSelector((state: RootState) => state.weather)

    const handlePreviousButtonClick = () => {
        if (weatherIndex > 0) setWeatherIndex((weatherIndex) => weatherIndex - 1)
        console.log(weatherIndex);
        console.log(weatherIndex + 3);

    }

    const handleNextButtonClick = () => {
        console.log("handling next button", weatherIndex <= 2);

        if (weatherIndex < 2) setWeatherIndex((weatherIndex) => weatherIndex + 1);
        console.log(weatherIndex);
    }

    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            spacing={2}

        >

            <Grid item >
                <IconButton aria-label="previous" onClick={handlePreviousButtonClick}>
                    <ArrowBackIosNewIcon />
                </IconButton>
            </Grid>

            {WeatherList.slice(weatherIndex, weatherIndex + 3).map((dayWeather) => (
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
                <IconButton aria-label="next" onClick={handleNextButtonClick}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Grid>
            <Grid container
                justifyContent="center"
                alignItems="center"
                spacing={2}

            >
                <Grid item
                    marginTop={5}
                >
                    <LineChart width={600} height={300} data={WeatherList}>
                        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="day" />
                        <YAxis />
                    </LineChart>
                </Grid>
            </Grid>

        </Grid>

    );
}