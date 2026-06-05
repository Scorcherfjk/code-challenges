import { describe, it, expect } from 'vitest';
import { searchRSA } from '../022-searchRSA';

describe('searchRSA', () => {
  it('should return the index of the target in a rotated sorted array', () => {
    expect(searchRSA([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it('should return -1 when the target is not present', () => {
    expect(searchRSA([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  it('should return -1 for an empty array', () => {
    expect(searchRSA([], 1)).toBe(-1);
  });
});
