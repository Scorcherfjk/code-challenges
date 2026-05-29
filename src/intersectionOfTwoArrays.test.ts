import { describe, it, expect } from 'vitest';
import { intersection } from './intersectionOfTwoArrays';

describe('intersection', () => {
  it('should return common elements when duplicates exist', () => {
    expect(intersection([2, 7, 11, 15], [2, 7, 8])).toEqual([2, 7]);
  });

  it('should return empty array when no duplicates exist', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('should handle duplicate values in input arrays and return unique intersection', () => {
    expect(intersection([1, 2, 2, 3], [2, 2, 4])).toEqual([2]);
  });
});
