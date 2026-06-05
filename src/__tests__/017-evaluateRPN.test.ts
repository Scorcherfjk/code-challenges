import { describe, it, expect } from 'vitest';
import { evalRPN } from '../017-evaluateRPN';

describe('evalRPN', () => {
  it('should evaluate a basic RPN expression', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
  });

  it('should evaluate a more complex RPN expression', () => {
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6);
  });

  it('should handle negative numbers and truncating division', () => {
    expect(evalRPN(['3', '-2', '/'])).toBe(-1);
  });
});
