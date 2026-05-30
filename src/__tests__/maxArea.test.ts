import { describe, it, expect } from 'vitest';
import { maxArea } from '../maxArea';

describe('maxArea', () => {
  it('should return the maximum area for a standard input', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('should handle the minimum case with two bars', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it('should handle decreasing heights', () => {
    expect(maxArea([5, 4, 3, 2, 1])).toBe(6);
  });

  it('should return the max area when the best pair is at the edges', () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  it('should handle heights with zeros', () => {
    expect(maxArea([0, 2, 0, 4])).toBe(4);
  });
});