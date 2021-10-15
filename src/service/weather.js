import axios from 'axios';
import {EXCEPTIONS} from '../constants';
import {dateUtils} from '../utils';

const getWeatherLabelByWeatherId = (weatherId) => {
    switch (true) {
        case weatherId >= 200 && weatherId <= 232:
            return '⛈ Orageux';
        case weatherId >= 300 && weatherId <= 531:
            return '🌧 Pluie';
        case weatherId >= 600 && weatherId <= 622:
            return '🌨 Neige';
        case weatherId >= 701 && weatherId <= 781:
            return '<:mist:518820817757405192> Brouillard';
        case weatherId === 800:
            return '☀ Ensoleillé';
        case weatherId === 801:
            return '🌤 Ensoleillé';
        case weatherId >= 802:
            return '☁ Nuageux';
        default:
            return 'Inconnu';
    }
};

const formatWeatherData = (data) => {
    return {
        time: dateUtils.formatDate(new Date(data.dt * 1000)),
        label: getWeatherLabelByWeatherId(data.weather[0].id),
        temperature: Math.round(data.main.temp - 273.15)
    };
};

const getWeatherData = (city) => {
    return axios
        .get(process.env.WEATHER_API_URL, {
            params: {
                q: city,
                APPID: process.env.WEATHER_API_TOKEN
            }
        })
        .then((result) => {
            return result?.data?.list?.slice(0, 6).map(formatWeatherData);
        })
        .catch((error) => {
            if (error.response?.data?.message === 'city not found') throw new Error(EXCEPTIONS.CITY_NOT_FOUND);
            throw new Error(`${EXCEPTIONS.WEATHER_API_ERROR}: ${error}`);
        });
};

export default {getWeatherData};
