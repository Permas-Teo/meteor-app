import React, { useState } from 'react';
import {
  Box,
  Center,
  Image,
  Container,
  Flex,
  Spacer,
  Icon,
  Text,
  Button,
} from '@chakra-ui/react';

export const LocationClicked = ({ singleItem }) => {
  // useEffect(() => {
  //   const refresh = () => {
  //     let resultData = fetchTraffic(date, time);
  //     resultData.then(data => {
  //       setRes(data);
  //     });
  //   };
  //   refresh();
  // }, [date, time]);

  return (
    <Center m={4}>
      <Box>
        <Image src={singleItem.image} htmlWidth={640} />
      </Box>
    </Center>
  );
};
