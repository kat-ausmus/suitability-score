import { runSuitabilityScore } from './score/runSuitabilityScore.js';
import { input } from '@inquirer/prompts';
import { cliPrompt } from './cli/cliPrompt.js';


try {
  /**
   * calls `input` to wait for user entry from command prompt
   * `input` would call the validate function from cliPrompt after <enter>
   *  to make sure the data is valid, if not, it will keep on prompting
   *  the same message prompt.
   */
  const destinationAddressFile = await input(cliPrompt.addressFile);
  const driverFile = await input(cliPrompt.driverFile);
  const results = await runSuitabilityScore({
    driverFile,
    destinationAddressFile,
  });
  console.log('Results are:', results);
  console.log('***** the end *****');
} catch (mainErr) {
  console.log('Error while running SuitabilityScore', mainErr.message, mainErr);
}
