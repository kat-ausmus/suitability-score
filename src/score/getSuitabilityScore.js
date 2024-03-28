import {assignDriverWithHighestSSToAddress} from './assignDriverWithHighestSSToAddress.js';

/**
 * Goes through the list of addresses to assign the best possible driver.
 *
 * @param driverNames
 * @param addresses
 * @returns {*}
 */
export const getSuitabilityScore = ({ driverNames, addresses }) => {
  const mostSuitableDriverForAddress = addresses.map(
    ({ address, streetName }) => {
      const { driver, suitabilityScore } = assignDriverWithHighestSSToAddress({
        driverNames,
        streetName,
      });
      return { address, driver, suitabilityScore };
    },
  );
  const totalSuitabilityScore = mostSuitableDriverForAddress.reduce(
    (acc, { suitabilityScore, ...others }) => acc + suitabilityScore,
    0,
  );
  return {
    totalSuitabilityScore,
    driverAssignments: mostSuitableDriverForAddress,
  };
};
