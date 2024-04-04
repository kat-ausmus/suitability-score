import { computeAllSuitabilityScore } from './helpers/computeAllSuitabilityScore.js';
import { getDriverAddressAssignments } from './helpers/getDriverAddressAssignments.js';

/**
 * Given a list of addresses and a list of drivers, find the best suitable driver for the address using
 * the suitabilityScore logic.
 *
 * @param driverNames
 * @param addresses
 * @returns { totalSuitabilityScore: number, driverAssignments }
 */
export const getSuitabilityScores = ({ driverNames, addresses }) => {
  if (!driverNames?.length || !addresses?.length) {
    return {
      totalSuitabilityScore: 0,
      driverAssignments: [],
    };
  }

  const {totalSuitabilityScore, orderedSuitabilityScores,addressDriverPairs} = computeAllSuitabilityScore({addresses,driverNames});

  const mostSuitableDriverForAddress = getDriverAddressAssignments({addressDriverPairs,orderedSuitabilityScores});

  return {
    totalSuitabilityScore,
    driverAssignments: mostSuitableDriverForAddress,
  };
};
