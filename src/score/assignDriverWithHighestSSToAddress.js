import {determineSuitabilityScore} from './scoreUtil.js';

/**
 * This function assigns the highest suitability score of a driver to an address
 * It consequently mutates the driverNames array when that driver has been assigned to an address
 *
 * @param driverNames
 * @param streetName
 * @returns {{driver: *, suitabilityScore: (number)}|null}
 */
export const assignDriverWithHighestSSToAddress = ({
  driverNames,
  streetName,
}) => {
  if (driverNames.length === 0) {
    return null;
  }

  const computeSSPerDriver = driverNames.map((name) => {
    if (name) {
      return {
        name,
        suitabilityScore: determineSuitabilityScore({
          driverName: name,
          streetName,
        }),
      };
    }
    return {};
  });

  const highestSuitability = computeSSPerDriver.reduce(
    (acc, item, idx) => {
      if (item.suitabilityScore > acc.suitabilityScore) {
        acc = { ...item, idx };
      }
      return acc;
    },
    { name: null, suitabilityScore: 0 },
  );

  const driver = driverNames[highestSuitability.idx];
  const suitabilityScore = highestSuitability.suitabilityScore;

  // mutating the driveNames list
  // not the best solution, but it removes the driver from the rotation for the day
  delete driverNames[highestSuitability.idx];

  return {
    driver,
    suitabilityScore,
  };
};
