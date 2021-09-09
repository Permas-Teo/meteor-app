import React from 'react';
import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';

export const QueryFilter = ({ date, setDate, time, setTime }) => {
  function onChangeDate(date, dateString) {
    setDate(dateString);
  }

  function onChangeTime(time, timeString) {
    setTime(timeString);
  }

  return (
    <Container maxWidth={'10xl'}>
      <Flex flexWrap={'wrap'} justify="center">
        <Box>
          <Container
            maxW={'md'}
            bg={'whiteAlpha.100'}
            boxShadow={'xl'}
            rounded={'lg'}
            p={[3, 6]}
            direction={'column'}
          >
            <Heading
              as={'h2'}
              fontSize={['lg', '2xl']}
              textAlign={'center'}
              my={5}
            >
              Live Filter
            </Heading>

            <Stack direction={'column'} as={'form'} spacing={'12px'}>
              <DatePicker
                onChange={onChangeDate}
                size={'large'}
                placeholder={'Date'}
                disabledDate={current => {
                  return moment() <= current;
                }}
              />
              <TimePicker
                onChange={onChangeTime}
                // defaultValue={moment('00:00:00', 'HH:mm:ss')}
                size={'large'}
                disabled={!date}
                placeholder={'Time'}
              />
            </Stack>
          </Container>
        </Box>
      </Flex>
    </Container>
  );
};
