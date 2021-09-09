import React from 'react';
import { Box, Center, Image, Divider, Text, VStack } from '@chakra-ui/react';
import { getImageSrcFromForecast } from '../../utils/utilFunctions';

export const LocationClicked = ({ singleItem, forecast }) => {
  return (
    <Center>
      <VStack>
        <Divider mt={2} />
        <Box p={[0, 2]}>
          <Center>
            <Image
              src={getImageSrcFromForecast(forecast)}
              boxSize={['50px', '80px']}
            />
          </Center>
          <Text mt={2} fontSize={['md', 'xl']}>
            {forecast}
          </Text>
        </Box>
        <Divider />
        <Box>
          <Image src={singleItem.image} htmlWidth={640} />
        </Box>
      </VStack>
    </Center>
  );
};
