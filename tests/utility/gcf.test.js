import { gcf } from '../../src/utility/gcf.js';

describe('GCF of 2 numbers', () => {
  it('is 1 for prime numbers', () => {
    expect(gcf(3, 2)).toBe(1);
  });

  it('is 2, if `2` is included in the given numbers and all are even numbers', () => {
    expect(gcf(2, 18)).toBe(2);
  });
});