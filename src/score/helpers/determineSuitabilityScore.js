import { consonantsRegEx, vowelsRegEx } from '../constants/regEx.js';
import { gcf } from '../../utility/gcf.js';

const EVEN_MULTIPLIER = 1.5;
const ODD_MULTIPLIER = 1;

/**
 * The top-secret algorithm is:
 *
 *  1. If the length of the shipment's destination street name is even,
 *     the base suitability score (SS) is the number of vowels in the driver’s name multiplied by 1.5.
 *  2. If the length of the shipment's destination street name is odd,
 *     the base SS is the number of consonants in the driver’s name multiplied by 1.
 *  3. If the length of the shipment's destination street name shares any common factors (GCF)
 *     (besides 1) with the length of the driver’s name, the SS is increased by 50% above the base SS.
 *
 * @param driverName
 * @param streetName
 * @returns {number}
 */
export const determineSuitabilityScore = ({ driverName, streetName }) => {
  const streetNameLength = streetName.length;
  const driverNameLength = driverName.length;
  let baseSS;

  // if street name is even
  if (streetNameLength % 2 === 0) {
    const vowelsInName = driverName.match(vowelsRegEx);
    baseSS = vowelsInName ? vowelsInName.length * EVEN_MULTIPLIER: 0;
  } else {
    const consonantsInName = driverName.match(consonantsRegEx);
    baseSS = consonantsInName? consonantsInName?.length * ODD_MULTIPLIER : 0;
  }

  const factor = gcf(streetNameLength, driverNameLength);
  return factor > 1 ? baseSS * 1.5 : baseSS;
};