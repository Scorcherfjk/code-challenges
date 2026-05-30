import { describe, it, expect } from 'vitest';
import { merge } from '../007-mergeSortedArray';

describe('merge', () => {
  it('should merge two sorted arrays when both have elements', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('should handle an empty nums1 initial segment', () => {
    const nums1 = [0];
    merge(nums1, 0, [1], 1);
    expect(nums1).toEqual([1]);
  });

  it('should handle an empty nums2 array without changing nums1', () => {
    const nums1 = [1];
    merge(nums1, 1, [], 0);
    expect(nums1).toEqual([1]);
  });

  it('should merge arrays with duplicate values correctly', () => {
    const nums1 = [1, 1, 1, 0, 0, 0];
    merge(nums1, 3, [1, 1, 1], 3);
    expect(nums1).toEqual([1, 1, 1, 1, 1, 1]);
  });
});
