import * as React from 'react';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { switchTemperatureUnit } from '../store/weatherSlice';
import TextField from '@mui/material/TextField';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function TemperatureSelector() {
    const dispatch = useDispatch()

    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            margin={5}
        >
            <Grid item >
            </Grid>
            <Grid item
                justifyContent="center"
                alignItems="center"
                marginRight={5}
            >
                <TextField fullWidth label="City" id="fullWidth" />

            </Grid>

            <Grid item
                justifyContent="center"
                alignItems="center"
            >
                <div>

                    <span>Franheit</span>
                    <Switch {...label} defaultChecked
                        onClick={() => dispatch(switchTemperatureUnit())}
                    />
                    <span>Celcius</span>
                </div>
            </Grid>
            <Grid item >
            </Grid>
        </Grid>

    );
}