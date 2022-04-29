import * as React from 'react';
import Grid from '@mui/material/Grid';
import WeatherCard from './WeatherCard';


export default function WeatherResult() {
    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            spacing={2}

        >
            <Grid item >
                back
            </Grid>
            <Grid item
                justifyContent="center"
                alignItems="center"
            >
                <WeatherCard />
            </Grid>
            <Grid item
                justifyContent="center"
                alignItems="center"
            >
                <WeatherCard />
            </Grid>
            <Grid item
                justifyContent="center"
                alignItems="center"
            >
                <WeatherCard />
            </Grid>
            <Grid item
                justifyContent="center"
                alignItems="center"
            >
                <WeatherCard />
            </Grid>
            <Grid item
                justifyContent="center"
                alignItems="center"
            >
                <WeatherCard />
            </Grid>
            <Grid item >
                next
            </Grid>
        </Grid>

    );
}