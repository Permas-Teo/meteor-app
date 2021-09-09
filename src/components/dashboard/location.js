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
import { getClosestLocation } from '../../utils/utilFunctions';

export const Location = ({ singleItem }) => {
  const [weather, setWeather] = useState('');

  const closestLocation = getClosestLocation(
    singleItem.location.longitude,
    singleItem.location.latitude
  );

  return (
    <Center m={4}>
      <Container
        maxW={'xl'}
        bg={'whiteAlpha.100'}
        boxShadow={'lg'}
        rounded={'lg'}
        p={4}
        direction={'column'}
      >
        <Flex>
          <Box>
            <Text>{closestLocation}</Text>
            {/* <Text>{singleItem.location.longitude}</Text>
            <Text>{singleItem.location.latitude}</Text> */}
          </Box>
          <Spacer />
          <Box>
            <Button>Load Image</Button>
          </Box>
        </Flex>
      </Container>
    </Center>
  );
};
