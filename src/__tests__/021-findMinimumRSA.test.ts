import { describe, it, expect } from 'vitest';
import { findMinRSA } from '../021-findMinimumRSA';

describe('findMinRSA', () => {
  it('should return the minimum element in a rotated sorted array', () => {
    expect(findMinRSA([3, 4, 5, 1, 2])).toBe(1);
  });

  it('should return the minimum element when array is rotated and contains zero', () => {
    expect(findMinRSA([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  });

  it('should return the only element for a single-element array', () => {
    expect(findMinRSA([11])).toBe(11);
  });
});
