import { input } from '@inquirer/prompts';
import { cliPrompt } from './cli/cliPrompt.js';
import { getDestinationAddresses, getDriverNames } from './score/scoreUtil.js';
import { getSuitabilityScore } from './score/getSuitabilityScore.js';

const runSuitabilityScore = async () => {
  const destinationAddressFile = await input(cliPrompt.addressFile);
  const driverFile = await input(cliPrompt.driverFile);

  const driverNames = await getDriverNames(driverFile);
  const destinationAddresses = await getDestinationAddresses(
    destinationAddressFile,
  );

  const results = getSuitabilityScore({
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
