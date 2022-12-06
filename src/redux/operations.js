import axios from 'axios';
import * as actions from './actions';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '91ea7f389e76582e309295deb4709dea';

export const fetchWeatherByName = query => dispatch => {
  return axios
    .get(`${BASE_URL}?q=${query}&appid=${API_KEY}&units=metric`)
    .then(res => {
      dispatch(actions.fetchSuccess(res.data));
    });
};

export const getRequest = cityName => {
  return axios.get(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
};
