import { runSuitabilityScore } from './score/runSuitabilityScore.js';


try {
  const results = await runSuitabilityScore();
  console.log('Results are:', results)
  console.log('***** the end *****');
} catch (mainErr) {
  console.log('Error while running SuitabilityScore', mainErr.message, mainErr);
}
