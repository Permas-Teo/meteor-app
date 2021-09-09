import React from 'react';
import { Location } from './location';

export const LocationList = ({ trafficData, weatherData }) => {
  const camerasArr = trafficData.items[0].cameras;
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
