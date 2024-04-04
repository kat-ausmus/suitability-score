import { getDriversSuitabilityScoreForStreetName } from './getDriversSuitabilityScoreForStreetName.js';

/**
 *   Compute all suitability score (SS) for all addresses for all drivers
 *   then sort the set of SS in descending order
 *
 * @param addresses
 * @param driverNames
 * @returns {{totalSuitabilityScore: number, addressDriverPairs: *, orderedSuitabilityScores: Set}}
 */
export const computeAllSuitabilityScore = ({addresses, driverNames}) => {
  const {totalSuitabilityScore, setOfSuitabilityScores, addressesResult} = addresses.reduce(
    (accumulator, { address, streetName }) => {
      const suitabilityScoresOfAllDriversForStreetNameArr = getDriversSuitabilityScoreForStreetName({
        driverNames,
        streetName,
      }) || [];

      let sumOfAllSuitabilityScoreForAddress = 0;
      suitabilityScoresOfAllDriversForStreetNameArr?.forEach(item =>  {
        if(item.suitabilityScore) {
          accumulator.setOfSuitabilityScores.add(item.suitabilityScore)
          sumOfAllSuitabilityScoreForAddress += item.suitabilityScore;
        }
      });
      accumulator.addressesResult[address] = suitabilityScoresOfAllDriversForStreetNameArr;
      accumulator.totalSuitabilityScore += sumOfAllSuitabilityScoreForAddress;

      return accumulator;
    }, {totalSuitabilityScore:0, setOfSuitabilityScores:new Set(),addressesResult:{}}
  );
 const orderedSuitabilityScores = [...setOfSuitabilityScores].sort((a,b) => b - a); // descending order

 return {
   totalSuitabilityScore:totalSuitabilityScore,
   orderedSuitabilityScores,
   addressDriverPairs: addressesResult
 }
}