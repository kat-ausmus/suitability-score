import { runSuitabilityScore } from '../../src/score/runSuitabilityScore.js';
import { beforeEach } from '@jest/globals';


describe('runSuitabilityScore', () => {
  let destinationAddressFile, driverFile;

  beforeEach(() => {
    destinationAddressFile = './resources/destinationAddresses.txt';
    driverFile = './resources/driverNames.txt';
  });

  it('returns the totalSuitabilityScore and driverAssignments', async () => {
    const result = await runSuitabilityScore({ destinationAddressFile, driverFile });
    expect(result).toEqual({
        totalSuitabilityScore: 776.25,
        driverAssignments: [
          {
            address: '1234 Sample Address drive, CA, 90210',
            driver: 'Olive Aulive',
            suitabilityScore: 15.75,
          },
          {
            address: '1 Early Morn Ave. San Diego, CA 92134',
            driver: 'Marcus Aurelius',
            suitabilityScore: 15.75,
          },
          {
            address: '44 Faking Dr., San Diego, CA 92122',
            driver: 'Daniel Davidson',
            suitabilityScore: 13.5,
          },
          {
            address: '44 Faker Blvd, San Diego, CA 92122',
            driver: 'Clark Kent',
            suitabilityScore: 10.5,
          },
          {
            address: '1 1st Ave. San Diego, CA 92134',
            driver: 'Peter Parker',
            suitabilityScore: 10.5,
          },
          {
            address: '44 Fake Dr., San Diego, CA 92122',
            driver: 'Charles Darwin',
            suitabilityScore: 9,
          },
          {
            address: '12345 King of the Hill street, San Diego, CA 92011',
            driver: 'Jane Doe',
            suitabilityScore: 9,
          },
          {
            address: '1 Too Many Addresses Parkway, San Diego, CA 92122',
            driver: 'John Doe',
            suitabilityScore: 6.75,
          },
          {
            address: '44 Fake Farm Dr., San Diego, CA 92122',
            driver: 'Bruce Wayne',
            suitabilityScore: 6,
          },
        ],
      },
    );
  });

  it('returns total assignment of 0, and no driver assignments when there are no addresses', async () => {
    const result = await runSuitabilityScore({
      destinationAddressFile: 'someFile.txt', driverFile,
    });
    expect(result).toEqual({
      totalSuitabilityScore: 0,
      driverAssignments: [],
    });
  });

  it('returns total assignment of 0, and no driver assignments when there are no driverFIles', async () => {
    const result = await runSuitabilityScore({
      destinationAddressFile, driverFile: 'someBogusFile.txt',
    });
    expect(result).toEqual({
      totalSuitabilityScore: 0,
      driverAssignments: [],
    });
  });

});