import { getSuitabilityScores } from '../../src/score/getSuitabilityScores.js';

describe('getSuitabilityScores', () => {
  let driverNames, addresses;
  beforeEach(() => {
    driverNames = [
      'Charles Leclerc',
      'Fernando Alonzo',
      'Lewis Hamilton',
      'Carlos Sainz',
      'Yuki Tsunoda',
    ];

    addresses = [{
      address: '1 ascot dr., some city, some state, 10000',
      streetName: 'ascot',
    }, {
      address: '10 mascot rd., some city, some state, 10000', streetName: 'mascot',
    }];
  });

  it('returns driver assignments to addresses', () => {
    expect(getSuitabilityScores({ driverNames, addresses })).toEqual({
      totalSuitabilityScore: 102,
      driverAssignments: [{
        driver: 'Charles Leclerc', suitabilityScore: 15, address: '1 ascot dr., some city, some state, 10000',
      }, {
        driver: 'Fernando Alonzo', suitabilityScore: 13.5, address: '10 mascot rd., some city, some state, 10000',
      }],
    });
  });

  it('returns no driver assignments when there is an addresses but no streetName', () => {
    addresses = [{
      address: '10 rd., some city, some state, 10000',
      streetName: '',
    }];
    expect(getSuitabilityScores({ driverNames, addresses })).toEqual({
      totalSuitabilityScore: 0,
      driverAssignments: [],
    });
  });

  it('returns no driver assignments when there are no drivers', () => {
    driverNames = [];
    expect(getSuitabilityScores({ driverNames, addresses })).toEqual({
      totalSuitabilityScore: 0,
      driverAssignments: [],
    });
  });

  it('returns no driver assignments when there are no addresses', () => {
    addresses = [];
    expect(getSuitabilityScores({ driverNames, addresses })).toEqual({
      totalSuitabilityScore: 0,
      driverAssignments: [],
    });
  });
});