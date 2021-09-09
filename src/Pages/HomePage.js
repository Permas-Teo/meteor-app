import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { Box, Container, Flex } from '@chakra-ui/react';
import { QueryFilter } from '../components/dashboard/queryFilter';
import { fetchTraffic, fetchWeather } from '../api/api';
import { LocationList } from '../components/dashboard/locationList';

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
      <Container maxWidth={'10xl'}>
        <Flex flexWrap={'wrap'} justify="center">
          <Box m={2}>
            <QueryFilter
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
            />
          </Box>
        </Flex>
      </Container>

      {trafficData && weatherData && (
        <LocationList trafficData={trafficData} weatherData={weatherData} />
      )}
    </Layout>
  );
};

export default HomePage;
