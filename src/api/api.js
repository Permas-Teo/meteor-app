import { TRAFFIC_API_URL, WEATHER_API_URL } from '../utils/constants';

export const fetchTraffic = async (date = '', time = '') => {
  let params = new URLSearchParams();
  if (date && time) {
    let arg = '';
    arg += date;
    arg += 'T';
    arg += time;

    params.append('date_time', arg);

    let res = await fetch(TRAFFIC_API_URL + '?' + params.toString());
    return res.json();
  } else {
    let res = await fetch(TRAFFIC_API_URL);
    return res.json();
  }
};

export const fetchWeather = async (date = '', time = '') => {
  let params = new URLSearchParams();
  if (date && time) {
    let arg = '';
    arg += date;
    arg += 'T';
    arg += time;

    params.append('date_time', arg);

    let res = await fetch(WEATHER_API_URL + '?' + params.toString());
    return res.json();
  } else {
    let res = await fetch(WEATHER_API_URL);
    return res.json();
  }
};
