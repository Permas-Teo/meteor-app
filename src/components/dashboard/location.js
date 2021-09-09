import React, { useState } from 'react';
import {
  Box,
  Center,
  Container,
  Flex,
  Spacer,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  getClosestLocation,
  getForecastFromLocation,
} from '../../utils/utilFunctions';
import { LocationClicked } from './locationClicked';

export const Location = ({ singleItem, weatherData }) => {
  const [open, setOpen] = useState(false);

  const buttonSize = useBreakpointValue(['xs', 'md']);

  const closestLocation = getClosestLocation(
    singleItem.location.longitude,
    singleItem.location.latitude
  );

  const forecasts = weatherData.items[0].forecasts;
  const forecast = getForecastFromLocation(closestLocation, forecasts);

  return (
    <Center m={4}>
      <Container
        maxW={'xl'}
        bg={'whiteAlpha.100'}
        boxShadow={'lg'}
        rounded={'lg'}
        p={[2, 4]}
        direction={'column'}
      >
        <Flex>
          <Box py={[2, 0]} pl={[2, 0]}>
            <Text fontSize={['md', '2xl']}>{closestLocation}</Text>
          </Box>
          <Spacer />
          <Box py={[2, 0]} pr={[2, 0]}>
            <Button
              onClick={() => (open ? setOpen(false) : setOpen(true))}
              size={buttonSize}
              colorScheme="pink"
              variant={open ? 'ghost' : 'ghost'}
              rightIcon={open ? <TriangleUpIcon /> : <TriangleDownIcon />}
            >
              {open ? 'Hide' : 'Show'}
            </Button>
          </Box>
        </Flex>
        {open && (
          <LocationClicked singleItem={singleItem} forecast={forecast} />
        )}
      </Container>
    </Center>
  );
};
