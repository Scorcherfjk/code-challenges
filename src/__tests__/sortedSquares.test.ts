import { describe, it, expect } from 'vitest';
import { sortedSquares } from '../sortedSquares';

describe('sortedSquares', () => {
  it('should return sorted squares of positive numbers', () => {
    expect(sortedSquares([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
  });

  it('should return sorted squares of negative and positive numbers', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  });

  it('should handle array with all negative numbers', () => {
    expect(sortedSquares([-5, -3, -1])).toEqual([1, 9, 25]);
  });

  it('should handle single element array', () => {
    expect(sortedSquares([5])).toEqual([25]);
  });

  it('should handle array with zeros', () => {
    expect(sortedSquares([-2, 0, 2])).toEqual([0, 4, 4]);
  });

  it('should handle array with duplicate values', () => {
    expect(sortedSquares([-3, -3, 0, 3, 3])).toEqual([0, 9, 9, 9, 9]);
  });

  it('should handle empty array', () => {
    expect(sortedSquares([])).toEqual([]);
  });
});
