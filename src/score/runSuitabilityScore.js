import { getDestinationAddresses, getDriverNames } from './helpers/retrieveFile.js';

import { getSuitabilityScores } from './getSuitabilityScores.js';


export const runSuitabilityScore = async ({ destinationAddressFile, driverFile }) => {
  const driverNames = await getDriverNames(driverFile);
  const destinationAddresses = await getDestinationAddresses(destinationAddressFile);

  return getSuitabilityScores({
    driverNames: driverNames,
    addresses: destinationAddresses,
  });
};