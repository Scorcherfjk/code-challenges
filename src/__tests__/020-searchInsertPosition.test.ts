import { describe, it, expect } from 'vitest';
import { searchInsert } from '../020-searchInsertPosition';

describe('searchInsert', () => {
  it('should return the index of the target when present', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  it('should return the correct insert position when the target is missing', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  it('should return 4 when the target is larger than all elements', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  it('should return 0 when the target is smaller than all elements', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });
});
