import { determineSuitabilityScore } from '../../../src/score/helpers/determineSuitabilityScore.js';

describe('determineSuitabilityScore', () => {
  const testData = [
    { input: { driverName: 'Daniel Davidson', streetName: 'Fake' }, result: 9 },
    { input: { driverName: 'Alexis Boombox', streetName: 'Heartless' }, result: 7 },
    { input: { driverName: 'A B C', streetName: 'Fake' }, result: 1.5 },
    { input: { driverName: 'AEI OU', streetName: 'Fake' }, result: 11.25 },
    { input: { driverName: 'aeiou', streetName: 'Dude' }, result: 7.5 },
    { input: { driverName: 'tioraidh', streetName: 'Fad' }, result: 4 },
    { input: { driverName: 'Iain Agus Siobahn', streetName: 'Fake' }, result: 12 },
    { input: { driverName: 'BCDFGHJKLMNPQRSTVWxyz', streetName: 'Bo' }, result: 0 }, // no vowels in name
    { input: { driverName: 'ouAEIU', streetName: 'Marimar' }, result: 0 }, // no consonance in name
    { input: { driverName: 'B C', streetName: 'Fake' }, result: 0 }, // no vowels
  ];

  it.each(testData)(
    'given an address return street name',
    ({ input, result }) => {
      const output = determineSuitabilityScore({ driverName: input.driverName, streetName: input.streetName });
      expect(output).toEqual(result);
    },
  );
});