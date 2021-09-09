import { DATA_BANK } from './constants';

export function getClosestLocation(longitude, latitude) {
  function distance(currX, currY, locationX, locationY) {
    return Math.sqrt(
      Math.pow(currX - locationX, 2) + Math.pow(currY - locationY, 2)
    );
  }

  const map1 = DATA_BANK.map(x =>
    distance(
      longitude,
      latitude,
      x.label_location.longitude,
      x.label_location.latitude
    )
  );

  const minItem = Math.min(...map1);
  const minIndex = map1.indexOf(minItem);
  const closestLocation = DATA_BANK[minIndex]['name'];

  return closestLocation;
}

export function getForecastFromLocation(location, forecasts) {
  for (const index in forecasts) {
    const forecast = forecasts[index];
    if (forecast.area === location) {
      return forecast.forecast;
    }
  }

  return 'Not Available :(';
}
