import { extractStreetName } from '../../../src/score/helpers/extractStreetName.js';

describe('extractStreetName', () => {
  const testData = [
    {
      address: '1234 Sample Address drive, CA, 90210',
      result: 'Sample Address',
    },
    {
      address: '44 Fake Dr., San Diego, CA 92122',
      result: 'Fake',
    },
    {
      address: '44 fake dr, San Diego, CA 92122',
      result: 'fake',
    },
    {
      address: '444 fake Dr., San Diego, CA 92122',
      result: 'fake',
    },
    {
      address: '1 Too Many Addresses Parkway, San Diego, CA 92122',
      result: 'Too Many Addresses',
    },
    {
      address: '2 Roady Road, San Diego, CA 92122',
      result: 'Roady',
    },
    {
      address: '3 StreetWise Street, San Diego, CA 92122',
      result: 'StreetWise',
    },
    {
      address: '4 LoneDrive Court, San Diego, CA 92122',
      result: 'LoneDrive',
    },
    {
      address: null,
      result: null,
    },
  ];

  it.each(testData)(
    'given an address return street name',
    ({ address, result }) => {
      const output = extractStreetName(address);
      expect(output).toEqual(result);
    },
  );
});