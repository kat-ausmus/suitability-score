import { endOfStreetNameRegEx } from './constants/regEx.js';

export const extractStreetName = (address) => {
  const addressComponents = address.split(/[\s,]/);
  let streetNameFound = false;
  const streetNameArr = addressComponents.reduce((acc, component, idx) => {
    if (idx === 0) {
      return acc;
    }
    if (!streetNameFound) {
      if (component.toLowerCase().search(endOfStreetNameRegEx) < 0) {
        acc.push(component.trim());
      } else {
        streetNameFound = true;
      }
    }
    return acc;
  }, []);
  return streetNameArr.join(' ');
};
