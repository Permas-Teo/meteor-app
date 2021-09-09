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

export const LocationClicked = ({ imageLink }) => {
  return (
    <Center m={4}>
      <Box>
        <Image src={imageLink} />
      </Box>
    </Center>
  );
};
