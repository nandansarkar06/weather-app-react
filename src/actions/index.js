import axios from 'axios';

const API_KEY = '626d7b67081060cce2f3898d23c3c426'

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},IN`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}