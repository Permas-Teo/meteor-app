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

export const LocationList = ({ data }) => {
  const camerasArr = data.items[0].cameras;
  console.log(camerasArr);
  return (
    <>
      {camerasArr.length > 0 && (
        <>
          {camerasArr.map(singleItem => (
            <Location singleItem={singleItem} key={singleItem.camera_id} />
          ))}
        </>
      )}
    </>
  );
};
