import React from 'react';
import { Location } from './location';
import { sortByKey } from '../../utils/utilFunctions';

export const LocationList = ({ trafficData, weatherData }) => {
  const camerasArr = trafficData.items[0].cameras;
  sortByKey(camerasArr, 'camera_id');

  console.log(camerasArr);

  return (
    <>
      {camerasArr.length > 0 && (
        <>
          {camerasArr.map(singleItem => (
            <Location
              singleItem={singleItem}
              weatherData={weatherData}
              key={singleItem.camera_id}
            />
          ))}
        </>
      )}
    </>
  );
};
