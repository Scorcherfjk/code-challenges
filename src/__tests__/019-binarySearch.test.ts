import { describe, it, expect } from 'vitest';
import { search } from '../019-binarySearch';

describe('search', () => {
  it('should return the index of the target when present', () => {
    expect(search([1, 3, 5, 6], 5)).toBe(2);
  });

  it('should return -1 when the target is not found', () => {
    expect(search([1, 3, 5, 6], 2)).toBe(-1);
  });

  it('should return -1 for an empty array', () => {
    expect(search([], 3)).toBe(-1);
  });
});
