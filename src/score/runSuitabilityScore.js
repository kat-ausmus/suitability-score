import { input } from '@inquirer/prompts';
import { getDestinationAddresses, getDriverNames } from './helpers/retrieveFile.js';
import { cliPrompt } from '../cli/cliPrompt.js';
import { getSuitabilityScores } from './getSuitabilityScores.js';


export const runSuitabilityScore = async () => {
  /**
   * calls `input` to wait for user entry from command prompt
   * `input` would call the validate function from cliPrompt after <enter>
   *  to make sure the data is valid, if not, it will keep on prompting
   *  the same message prompt.
   */
  const destinationAddressFile = await input(cliPrompt.addressFile);
  const driverFile = await input(cliPrompt.driverFile);

  const driverNames = await getDriverNames(driverFile);
  const destinationAddresses = await getDestinationAddresses(
    destinationAddressFile,
  );

  return getSuitabilityScores({
    driverNames: [...driverNames], // pass in a copy of the original driverNames list,
    addresses: destinationAddresses,
  });
};