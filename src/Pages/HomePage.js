import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { QueryFilter } from '../components/dashboard/queryFilter';
import { Alerts } from '../components/dashboard/alerts';
import { fetchTraffic, fetchWeather } from '../api/api';
import { LocationList } from '../components/dashboard/locationList';

const HomePage = () => {
  const [trafficData, setTrafficData] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [requestUpdate, setRequestUpdate] = useState(new Date());

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
      {/* <Alerts setStatus={setStatus} status={status} /> */}

      <Container maxWidth={'10xl'}>
        <Flex flexWrap={'wrap'} justify="center">
          {/* <Box m={2}>
            <FileUpload
              setStatus={setStatus}
              setPage={setPage}
              setRequestUpdate={setRequestUpdate}
            />
          </Box> */}
          <Box m={2}>
            <QueryFilter
              // setPage={setPage}
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

      {/* {trafficData && (
        <SalaryTable
          data={trafficData}
          setSortToggle={setSortToggle}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          setRequestUpdate={setRequestUpdate}
        />
      )} */}
    </Layout>
  );
};

export default HomePage;
