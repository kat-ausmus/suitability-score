import {
  getDriversSuitabilityScoreForStreetName,
} from '../../../src/score/helpers/getDriversSuitabilityScoreForStreetName.js';

describe('getDriversSuitabilityScoreForStreetName', () => {
  let driverNames, streetName;
  beforeEach(() => {
    driverNames = [
      'Charles Leclerco',
      'Fernando Alonzo',
      'Lewis Hamilton',
      'Carlos Sainz',
      'Yuki Tsunoda',
    ];

  });

  it('returns all drivers with their suitability score for odd length streetName', () => {
    streetName = 'Formula';
    expect(getDriversSuitabilityScoreForStreetName({ driverNames, streetName })).toEqual([
      { driverName: 'Charles Leclerco', suitabilityScore: 10 },
      { driverName: 'Fernando Alonzo', suitabilityScore: 8 },
      { driverName: 'Lewis Hamilton', suitabilityScore: 12 },
      { driverName: 'Carlos Sainz', suitabilityScore: 7 },
      { driverName: 'Yuki Tsunoda', suitabilityScore: 6 },
    ]);
  });

  it('returns all drivers with their suitability score for even length streetName', () => {
    streetName = 'Only';
    expect(getDriversSuitabilityScoreForStreetName({ driverNames, streetName })).toEqual([
        { driverName: 'Charles Leclerco', suitabilityScore: 11.25 },
        { driverName: 'Fernando Alonzo', suitabilityScore: 9 },
        { driverName: 'Lewis Hamilton', suitabilityScore: 11.25 },
        { driverName: 'Carlos Sainz', suitabilityScore: 9 },
        { driverName: 'Yuki Tsunoda', suitabilityScore: 11.25 },
      ],
    );
  });

  it('returns when no driver\'s name is empty string', () => {
    driverNames = [''];
    expect(getDriversSuitabilityScoreForStreetName({ driverNames, streetName })).toEqual([]);
  });

  it('returns null when no driverNames', () => {
    driverNames = [];
    expect(getDriversSuitabilityScoreForStreetName({ driverNames, streetName })).toEqual(null);
  });

  it('returns null when no streetName', () => {
    streetName = '';
    expect(getDriversSuitabilityScoreForStreetName({ driverNames, streetName })).toEqual(null);
  });
});