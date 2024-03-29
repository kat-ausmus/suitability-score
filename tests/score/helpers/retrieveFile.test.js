// need to mock the readFile

import { getDestinationAddresses, getDriverNames } from '../../../src/score/helpers/retrieveFile.js';

describe('getDriverNames', () => {
  it('returns a list of drivers', async () => {
    const result = await getDriverNames('./resources/driverNames.txt');
    expect(result).toEqual([
        'Daniel Davidson',
        'Charles Darwin',
        'Marcus Aurelius',
        'John Doe',
        'Jane Doe',
        'Bruce Wayne',
        'Peter Parker',
        'Clark Kent',
        'Olive Aulive',
        '',
      ],
    );
  });

  it('returns [], when filename does not exists', async () => {
    const result = await getDriverNames('./resource/driverFaker.txt');
    expect(result).toEqual([]);
  });
});


describe('getDestinationAddresses', () => {
  const objList = [
    {
      address: '1234 Sample Address drive, CA, 90210', streetName: 'Sample Address',
    }, {
      address: '44 Fake Dr., San Diego, CA 92122', streetName: 'Fake',
    }, {
      address: '44 Faker Blvd, San Diego, CA 92122', streetName: 'Faker',
    }, {
      address: '1 1st Ave. San Diego, CA 92134', streetName: '1st',
    }, {
      address: '1 Early Morn Ave. San Diego, CA 92134', streetName: 'Early Morn',
    }, {
      address: '12345 King of the Hill street, San Diego, CA 92011', streetName: 'King of the Hill',
    }, {
      address: '44 Faking Dr., San Diego, CA 92122', streetName: 'Faking',
    }, {
      address: '44 Fake Farm Dr., San Diego, CA 92122', streetName: 'Fake Farm',
    }, {
      address: '44 Fake Fake Rd., San Diego, CA 92122', streetName: 'Fake Fake',
    }, {
      address: '1 Too Many Addresses Parkway, San Diego, CA 92122', streetName: 'Too Many Addresses',
    },
  ];
  it('returns a list of addresses', async () => {
    const result = await getDestinationAddresses('./resources/destinationAddresses.txt');
    expect(result).toEqual(objList);
  });

  it('returns [] when filename is does not exists', async () => {
    const result = await getDestinationAddresses('./addressFaker.txt');
    expect(result).toEqual([]);
  });
});

