import { assignDriverWithHighestSSToAddress } from '../../../src/score/helpers/assignDriverWithHighestSSToAddress.js';
import { beforeEach } from '@jest/globals';

describe('assignDriverWithHighestSSToAddress', () => {
  let driverNames, streetName;
  beforeEach(()=> {
    driverNames = [
      'Charles Leclerco',
      'Fernando Alonzo',
      'Lewis Hamilton',
      'Carlos Sainz',
      'Yuki Tsunoda'
    ];

  })

  it('returns driver with highest suitability score for odd length streetName',()=> {
    streetName='Formula';
    expect(assignDriverWithHighestSSToAddress({driverNames, streetName})).toEqual({driver:'Lewis Hamilton', suitabilityScore:12});
  })

  it('returns driver with highest suitability score for even length streetName',()=> {
    streetName='Only';
    expect(assignDriverWithHighestSSToAddress({driverNames, streetName})).toEqual({driver:'Charles Leclerco', suitabilityScore:11.25});
  })

  it('returns null when no driverNames',()=> {
    driverNames = [];
    expect(assignDriverWithHighestSSToAddress({driverNames, streetName})).toBe(null);
  })

  it('returns null when no streetName',()=> {
    driverNames.push('some name');
    streetName='';
    expect(assignDriverWithHighestSSToAddress({driverNames, streetName})).toBe(null);
  })
})