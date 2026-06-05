import { describe, it, expect } from 'vitest';
import { checkInclusion } from '../013-permutationInString';

describe('checkInclusion', () => {
  it('should return true when s2 contains a permutation of s1', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
  });

  it('should return false when s2 does not contain any permutation of s1', () => {
    expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
  });

  it('should handle repeated characters in s1 correctly', () => {
    expect(checkInclusion('aab', 'cbaebabacd')).toBe(true);
  });
});
