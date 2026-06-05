import { describe, it, expect } from 'vitest';
import { MinStack } from '../016-minStack';

describe('MinStack', () => {
  it('should support push, pop, top, and getMin operations', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);

    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });

  it('should handle repeated minimum values correctly', () => {
    const minStack = new MinStack();
    minStack.push(2);
    minStack.push(2);
    minStack.pop();
    expect(minStack.getMin()).toBe(2);
  });
});
