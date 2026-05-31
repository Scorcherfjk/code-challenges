import { describe, it, expect } from 'vitest';
import { lengthOfLongestSubstring } from '../012-lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
  it('returns 3 for "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('returns 1 for "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  it('returns 3 for "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('returns 0 for an empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('returns 4 for "dvdf"', () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  });

  it('returns 6 for a string with all unique characters', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6);
  });

    it('returns 1 for an string full of spaces', () => {
    expect(lengthOfLongestSubstring('     ')).toBe(1);
  });
});
