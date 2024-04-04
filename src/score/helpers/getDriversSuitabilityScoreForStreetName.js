import { determineSuitabilityScore } from './determineSuitabilityScore.js';


/**
 * This function returns all suitability score for each driver for the given address's street name
 *
 * @param driverNames
 * @param streetName
 * @returns {{driverName: string, suitabilityScore: (number)}|null}
 */
export const getDriversSuitabilityScoreForStreetName = ({
                                                          driverNames,
                                                          streetName,
                                                        }) => {
  if (driverNames.length === 0 || !streetName) {
    return null;
  }

  return driverNames.reduce((acc, name) => {
    if (name) {
      acc.push({
        driverName: name,
        suitabilityScore: determineSuitabilityScore({
          driverName: name,
          streetName,
        }),
      });
    }
    return acc;
  }, []);
};
