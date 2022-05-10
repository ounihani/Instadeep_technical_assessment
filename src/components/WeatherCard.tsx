import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { RootState } from "../store/store";


type WeatherResultProps = {
  id: number,
  day: number,
  temperature: number,
  icon: string,
  condition: string,
  description: string
}


const WeatherIcon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`;


export default function WeatherCard(props: WeatherResultProps) {
  let day: string;
  if (props.id === -1) day = 'Yesterday'
  else if (props.id === 0) day = 'Today'
  else day = (new Date(props.day * 1000)).toLocaleDateString("en-US");

  const { tempratureUnit } = useSelector((state: RootState) => state.weather)

  // the formula of conversion
  let temperature = tempratureUnit === 'C' ? props.temperature - 273.15 : (props.temperature - 273.15) * 9 / 5 + 32 
  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <WeatherIcon alt="" src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom margin={3}>
          {day}
        </Typography>
        <Typography variant="h5" component="div" margin={3}>
          Temperature: {Math.round(temperature)} {tempratureUnit}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" margin={3}>
          <b>Weather Condition:</b> {props.condition}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" margin={3}>
          <b>Description:</b> {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}