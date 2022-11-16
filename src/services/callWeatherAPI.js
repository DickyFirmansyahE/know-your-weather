import { DateTime } from "luxon";

const apiKey = '91ea7f389e76582e309295deb4709dea';
const weatherUrl = 'https://api.openweathermap.org/data/2.5';
const forcastUrl = 'https://api.openweathermap.org/data/3.0';
const weatherIcon = 'http://openweathermap.org/img/wn/';

const callWeather = ( infoType, searchParams ) => {
    const Url = new URL(weatherUrl + '/' + infoType);
    Url.search = new URLSearchParams({ ...searchParams, appid: apiKey});

    return fetch(Url).then((res) => res.json());
};

const callForecast = ( infoType, searchParams ) => {
    const Url = new URL(forcastUrl + '/' + infoType);
    Url.search = new URLSearchParams({ ...searchParams, appid: apiKey});

    return fetch(Url).then((res) => res.json());
};

const weatherIconUrl = (code) =>
  `${weatherIcon}/${code}@2x.png`;

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy | hh:mm a",
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const currentWeatherFormat = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon, description } = weather[0];

    return {
      lat,
      lon,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      name,
      dt,
      country,
      sunrise,
      sunset,
      details,
      icon,
      description,
      speed,
    };
};

const forecastFormat = (data) => {
    let { timezone, hourly, daily } = data;
    
    hourly = hourly.slice(1, 6).map((fhourly) => {
        return {
            title: formatToLocalTime(fhourly.dt, timezone, 'hh:mm a'),
            temp: fhourly.temp,
            icon: fhourly.weather[0].icon,
        }
    });

    daily = daily.slice(1, 6).map((fdaily) => {
        return {
            title: formatToLocalTime(fdaily.dt, timezone, 'ccc'),
            tempmin: fdaily.temp.min,
            tempmax: fdaily.temp.max,
            icon: fdaily.weather[0].icon,
            description: fdaily.weather[0].description,
        }
    });

    return { timezone, hourly, daily }
};

const getWeatherData = async (searchParams) => {

    const currentWeatherData = await callWeather(
        'weather',
        searchParams
    ).then(
        currentWeatherFormat
    );

    const { lat, lon } = currentWeatherData;

    const forecastData = await callForecast('onecall', {
        lat,
        lon,
        exclude: 'current,minutely,alerts',
        units: searchParams.units,
        lang: 'En',
    }).then(
        forecastFormat
    );

    return { ...currentWeatherData, ...forecastData };
};

export { formatToLocalTime, weatherIconUrl };

export default getWeatherData;
