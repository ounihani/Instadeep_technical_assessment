import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function WeatherCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Day
        </Typography>
        <Typography variant="h5" component="div">
          Temperature
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Humidity
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Sky condition
        </Typography>
      </CardContent>
    </Card>
  );
}