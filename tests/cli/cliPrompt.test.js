import { cliPrompt } from '../../src/cli/cliPrompt.js';

describe('cliPrompt', () => {
  describe('Driver Name prompt', () => {
    it('should validate', () => {
      expect(cliPrompt.driverFile.validate('./resources/driverNames.txt')).toEqual(true);
    });
    it('should fail when pathname is invalid', () => {
      expect(cliPrompt.driverFile.validate('./resources/fail.txt')).toEqual('Error: ./resources/fail.txt is not a valid pathname');
    });
    it('should fail when pathname is invalid', () => {
      expect(cliPrompt.driverFile.validate('./resources')).toEqual('./resources is not a file!');
    });
  });
  describe('Destination Addresses prompt', () => {
    it('should validate', () => {
      expect(cliPrompt.addressFile.validate('./resources/destinationAddresses.txt')).toEqual(true);
    });
    it('should validate', () => {
      expect(cliPrompt.addressFile.validate('./fail.txt')).toEqual('Error: ./fail.txt is not a valid pathname');
    });
  });
});