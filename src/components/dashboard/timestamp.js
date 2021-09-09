import React from 'react';
import { Center, Text } from '@chakra-ui/react';

export const Timestamp = ({ timestamp }) => {
  return (
    <Center m={4}>
      <Text>
        {'True Timestamp: ' +
          timestamp.split('T')[0] +
          ' | ' +
          timestamp.split('T')[1]}{' '}
      </Text>
    </Center>
  );
};
