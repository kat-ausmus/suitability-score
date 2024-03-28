import { readFile } from '../utility/readFile.js';
import { extractStreetName } from './extractStreetName.js';
import { consonantsRegEx, vowelsRegEx } from './constants/regEx.js';
import {
  EVEN_MULTIPLIER,
  ODD_MULTIPLIER,
} from './constants/scoreLogicConstants.js';
import { gcf } from '../utility/gcf.js';

export const getDriverNames = async (filename) => {
  const driverNames = await readFile(filename);
  return driverNames.split('\n');
};

export const getDestinationAddresses = async (filename) => {
  const destinationAddresses = await readFile(filename);
  const addresses = destinationAddresses.split('\n');
  return addresses.map((address) => ({
    address,
    streetName: extractStreetName(address),
  }));
};

//The top-secret algorithm is:
//
// 1. If the length of the shipment's destination street name is even, the base suitability score (SS) is the number of vowels in the driver’s name multiplied by 1.5.
// 2. If the length of the shipment's destination street name is odd, the base SS is the number of consonants in the driver’s name multiplied by 1.
export const determineSuitabilityScore = ({ driverName, streetName }) => {
  const streetNameLength = streetName.length;
  const driverNameLength = driverName.length;
  let baseSS = 0;

  // if street name is even
  if (streetNameLength % 2 === 0) {
    const vowelsInName = driverName.match(vowelsRegEx);
    baseSS = vowelsInName.length * EVEN_MULTIPLIER;
  } else {
    const consonantsInName = driverName.match(consonantsRegEx);
    baseSS = consonantsInName?.length * ODD_MULTIPLIER;
  }
  const factor = gcf(streetNameLength, driverNameLength);

  return factor > 1 ? baseSS * 1.5 : baseSS;
};
