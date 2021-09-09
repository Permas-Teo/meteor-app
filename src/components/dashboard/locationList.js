import React, { useState } from 'react';
import {
  Box,
  Center,
  Container,
  Flex,
  Spacer,
  Icon,
  Text,
  Button,
} from '@chakra-ui/react';
import { Location } from './location';

export const LocationList = ({ trafficData, weatherData }) => {
  const camerasArr = trafficData.items[0].cameras;
  console.log(camerasArr);
  return (
    <>
      {camerasArr.length > 0 && (
        <>
          {camerasArr.map(singleItem => (
            <Location
              singleItem={singleItem}
              weatherData={weatherData}
              key={singleItem.camera_id}
            />
          ))}
        </>
      )}
    </>
  );
};
