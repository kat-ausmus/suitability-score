import {assignDriverWithHighestSSToAddress} from './helpers/assignDriverWithHighestSSToAddress.js';

/**
 * Given a list of addresses and a list of drivers, find the best suitable driver for the address using
 * the suitabilityScore logic.
 *
 * @param driverNames
 * @param addresses
 * @returns { totalSuitabilityScore: number, driverAssignments }
 */
export const getSuitabilityScores = ({ driverNames, addresses }) => {
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