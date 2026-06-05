import { describe, it, expect } from 'vitest';
import { isValid } from '../015-validParenthesis';

describe('isValid', () => {
  it('should return true for a valid parentheses string', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  it('should return false for mismatched brackets', () => {
    expect(isValid('(]')).toBe(false);
  });

  it('should return false for incorrectly nested parentheses', () => {
    expect(isValid('([)]')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isValid('')).toBe(true);
  });
});
