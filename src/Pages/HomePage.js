import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { QueryFilter } from '../components/dashboard/queryFilter';
import { fetchTraffic, fetchWeather } from '../api/api';
import { LocationList } from '../components/dashboard/locationList';
import { Timestamp } from '../components/dashboard/timestamp';

const HomePage = () => {
  const [trafficData, setTrafficData] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const refresh = () => {
      const trafficData = fetchTraffic(date, time);
      trafficData.then(data => {
        setTrafficData(data);
      });

      const weatherData = fetchWeather(date, time);
      weatherData.then(data => {
        setWeatherData(data);
      });
    };
    refresh();
  }, [date, time]);

  return (
    <Layout>
      <QueryFilter
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
      />

      {trafficData && weatherData && (
        <>
          <Timestamp timestamp={trafficData.items[0].timestamp} />
          <LocationList trafficData={trafficData} weatherData={weatherData} />
        </>
      )}
    </Layout>
  );
};

export default HomePage;
