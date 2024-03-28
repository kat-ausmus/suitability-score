import { input } from '@inquirer/prompts';
import { cliPrompt } from './cli/cliPrompt.js';
import { getDestinationAddresses, getDriverNames } from './score/helpers/retrieveFile.js';
import { getSuitabilityScores } from './score/getSuitabilityScores.js';

const runSuitabilityScore = async () => {
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

  const results = getSuitabilityScores({
    driverNames: [...driverNames], // pass in a copy of the original driverNames list,
    addresses: destinationAddresses,
  });
  console.log('results are:', results);

  return true;
};

try {
  await runSuitabilityScore();
  console.log('***** the end *****');
} catch (mainErr) {
  console.log('Error while running SuitabilityScore', mainErr.message, mainErr);
}
