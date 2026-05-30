import { describe, it, expect } from 'vitest';
import { isPalindrome } from '../isPalindrome';

describe('isPalindrome', () => {
  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toEqual(true);
  });

  it('should return true for a palindrome string', () => {
    expect(isPalindrome('race car')).toEqual(true);
  });

  it('should return true for a palindrome string with punctuation and spaces', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
  });

  it('should return false for a non-palindrome string', () => {
    expect(isPalindrome('hello')).toEqual(false);
  });

  it('should return true for a single character string', () => {
    expect(isPalindrome('a')).toEqual(true);
  });
});
