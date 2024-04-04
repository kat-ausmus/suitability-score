/**
 *   Assign the address/driver with the highest scores first
 *   then exclude the addresses and drivers that have been assigned.
 *
 *   Continue going through the address keys for the same SS scores until all keys are looked at
 *   then pick the next highest score to find the driver-address pair

 *
 * @param addressDriverPairs
 * @param orderedSuitabilityScores
 * @returns {[{address, driver, suitabilityScore}]}
 */
export const getDriverAddressAssignments =({addressDriverPairs, orderedSuitabilityScores}) => {

  const result = []
  const excludeDrivers =[];
  const excludeAddress = []
  for(let i = 0; i< orderedSuitabilityScores.length; i++){
    // find suitability score equals to the orderedSuitabilityScores[i]
    const currentDesiredScore = orderedSuitabilityScores[i];

    const pairs = Object.entries(addressDriverPairs);
    for(let j=0; j < pairs.length ; j++){
      const [addressKey, driverSuitabilityArr] = pairs[j];

      // if address has already been assigned, skip
      if(excludeAddress.includes(addressKey)){
        continue;
      }

      // only consider drivers that has not been assigned to an address yet
      const found = driverSuitabilityArr.find(item => (item.suitabilityScore === currentDesiredScore) && !excludeDrivers.includes(item.driverName.toLowerCase()));
      if(found){
        result.push({
          address: addressKey,
          driver: found.driverName,
          suitabilityScore: found.suitabilityScore
        });
        excludeDrivers.push(found.driverName.toLowerCase());
        excludeAddress.push(addressKey);
      }
    }
 }
 return result;
}