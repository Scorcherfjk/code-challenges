import { describe, it, expect } from 'vitest';
import { threeSum } from '../010-ThreeSum';

const normalize = (arr: number[][]) =>
  arr
    .map((a) => a.slice().sort((x, y) => x - y))
    .sort((a, b) => a.join(',').localeCompare(b.join(',')));

describe('threeSum', () => {
  it('returns unique triplets that sum to zero for sample input', () => {
    const input = [-1, 0, 1, 2, -1, -4];
    const expected = [[-1, -1, 2], [-1, 0, 1]];
    expect(normalize(threeSum(input))).toEqual(normalize(expected));
  });

  it('returns empty array when no triplets exist', () => {
    expect(threeSum([1, 2, 3, 4])).toEqual([]);
  });

  it('handles multiple zeros correctly', () => {
    expect(normalize(threeSum([0, 0, 0, 0]))).toEqual(normalize([[0, 0, 0]]));
  });

  it('handles mixed negatives and positives with multiple answers', () => {
    const input = [-2, 0, 1, 1, 2];
    const expected = [[-2, 0, 2], [-2, 1, 1]];
    expect(normalize(threeSum(input))).toEqual(normalize(expected));
  });

  it('returns empty for empty input', () => {
    expect(threeSum([])).toEqual([]);
  });
});
