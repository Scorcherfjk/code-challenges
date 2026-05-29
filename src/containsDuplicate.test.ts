import { describe, it, expect } from 'vitest';
import { containsDuplicate } from './containsDuplicate';

describe('containsDuplicates', () => {
  it('should return false if no duplicates', () => {
    expect(containsDuplicate([2, 7, 11, 15])).toEqual(false);
  });

  it('should return true if any duplicates', () => {
    expect(containsDuplicate([3, 2, 4, 5,3,2,5,7])).toEqual(true);
  });
});
