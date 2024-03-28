import { determineSuitabilityScore } from './determineSuitabilityScore.js';


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

  // mutating the driveNames list to remove drivers that area already assigned from the list
  delete driverNames[highestSuitability.idx];

  return {
    driver,
    suitabilityScore,
  };
};
