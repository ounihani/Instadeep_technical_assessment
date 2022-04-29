import * as React from 'react';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function TemperatureSelector() {
    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
        >
            <Grid item >
            </Grid>
            <Grid item
                justifyContent="center"
                alignItems="center"
            >
                <div>

                    <span>Celcius</span>
                    <Switch {...label} defaultChecked />
                    <span>Franheit</span>
                </div>
            </Grid>
            <Grid item >
            </Grid>
        </Grid>

    );
}