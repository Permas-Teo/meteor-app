import React from 'react';
import { Button, Container, Center, Heading, Stack } from '@chakra-ui/react';

import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';

export const QueryFilter = ({ date, setDate, time, setTime }) => {
  function onChangeDate(date, dateString) {
    console.log(date, dateString);
    setDate(dateString);
  }

  function onChangeTime(time, timeString) {
    console.log(time, timeString);
    setTime(timeString);
  }

  return (
    <Container
      maxW={'md'}
      bg={'whiteAlpha.100'}
      boxShadow={'xl'}
      rounded={'lg'}
      p={6}
      direction={'column'}
    >
      <Heading
        as={'h2'}
        fontSize={{ base: 'xl', sm: '2xl' }}
        textAlign={'center'}
        my={5}
      >
        Live Filter
      </Heading>

      <Stack direction={'column'} as={'form'} spacing={'12px'}>
        <DatePicker onChange={onChangeDate} size={'large'} />
        <TimePicker
          onChange={onChangeTime}
          defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
          size={'large'}
        />
      </Stack>
    </Container>
  );
};
