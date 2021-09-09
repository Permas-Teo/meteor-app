import React, { useState, useEffect } from 'react';
import {
  Box,
  Center,
  Image,
  Divider,
  Container,
  Flex,
  Spacer,
  Icon,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { fetchWeather } from '../../api/api';

export const LocationClicked = ({ singleItem, forecast }) => {
  const [weather, setWeather] = useState('');

  // useEffect(() => {
  //   const refresh = () => {
  //     let resultData = fetchWeather(singleItem.timestamp);
  //     resultData.then(data => {
  //       console.log(data);
  //       setWeather(data);
  //     });
  //   };
  //   refresh();
  // }, []);

  // const forecast =

  return (
    <Center>
      <VStack>
        <Divider mt={2} />
        <Box p={[0, 4]}>
          <Text fontSize={['md', 'xl']}>{forecast}</Text>
        </Box>
        <Divider mb={2} />
        <Box>
          <Image src={singleItem.image} htmlWidth={640} />
        </Box>
      </VStack>
    </Center>
  );
};
