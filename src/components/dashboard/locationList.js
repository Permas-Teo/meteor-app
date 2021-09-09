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

export const LocationList = ({ data }) => {
  const camerasArr = data.items[0].cameras;
  console.log(camerasArr);
  return (
    <>
      {camerasArr.length > 0 && (
        <>
          {camerasArr.map(singleItem => (
            <Center m={4} key={singleItem.camera_id}>
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
                    <Text>{singleItem.location.longitude}</Text>
                    <Text>{singleItem.location.latitude}</Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button>Load Image</Button>
                  </Box>
                </Flex>
              </Container>
            </Center>
          ))}
        </>
      )}
    </>
  );
};
