import { describe, it, expect } from 'vitest';
import { minSubArrayLen } from '../014-minimumSizeSubarraySum';

describe('minSubArrayLen', () => {
  it('should return the minimum length of a subarray with sum at least target', () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  });

  it('should return 1 when a single element meets the target', () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
  });

  it('should return 0 when no subarray reaches the target sum', () => {
    expect(minSubArrayLen(100, [1, 2, 3, 4])).toBe(0);
  });
});
