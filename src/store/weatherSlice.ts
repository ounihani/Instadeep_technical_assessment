import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

interface WeatherSliceState {
    city: String;
    WeatherList: Weather[],
    tempratureUnit: string,
    loading: boolean,
    error: boolean
}

// Action:
export const fetchWeatherAction = createAsyncThunk(
    "weather/fetch",
    async () => {

        // http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}


        let result: Weather[];
        result = [];
        // console.log("result1", typeof result);
        try {
            //getting the geolocation of the required city
            let { data } = await axios.get("http://api.openweathermap.org/geo/1.0/direct?q=tunis&appid=43258f0fdfec82ead8af1b77414e55b8");
            let lon = data[0].lon;
            let lat = data[0].lat;
            //getting yesterday's weather
            ({ data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=1651954377&appid=43258f0fdfec82ead8af1b77414e55b8`));

            let weatherObject: Weather;
            weatherObject = {
                id: -1,
                day: 0,
                temperature: 0,
                icon: '',
                condition: '',
                description: '',
            };

            weatherObject.day = data.current.dt;
            weatherObject.temperature = data.current.temp;
            weatherObject.icon = data.current.weather[0].icon;
            weatherObject.condition = data.current.weather[0].main;
            weatherObject.description = data.current.weather[0].description;
            result[0] = weatherObject;
            //getting the weather for the next 7 days
            ({ data } = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,current&appid=43258f0fdfec82ead8af1b77414e55b8`));
            // console.log("data", data);

            // return [result[0], ...data.daily];
            for (let i = 0; i < 4; i++) {
                result = [...result, {
                    id: i,
                    temperature: data.daily[i].temp.day,
                    day: data.daily[i].dt,
                    icon: data.daily[i].weather[0].icon,
                    condition: data.daily[i].weather[0].main,
                    description: data.daily[i].weather[0].description,
                }]

            }
            return result;
            // console.log("result", typeof result);

            return data;

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }


    }
)





const initialState: WeatherSliceState = {
    city: "Tunis",
    WeatherList: [],
    tempratureUnit: 'C',
    loading: true,
    error: false
}

export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        switchTemperatureUnit: (state) => {
            if (state.tempratureUnit === 'C') state.tempratureUnit = 'F'
            else state.tempratureUnit = 'C'
        },
    },
    extraReducers: (builder) => {
        // Pending:
        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true
            console.log("pending");
        })

        // Fulfilled:
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            console.log("fullfilled");
            state.loading = false
            console.log("payload", typeof action.payload);
            console.log("payload", action.payload);

            state.WeatherList = [...action?.payload]
            state.error = false
        })

        // Rejected
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            console.log("rejected");
            state.loading = false
            state.WeatherList = []
            state.error = true
        })
    },
})

export const { switchTemperatureUnit } = WeatherSlice.actions
export default WeatherSlice.reducer


