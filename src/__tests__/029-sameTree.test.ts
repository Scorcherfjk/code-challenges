import { describe, it, expect } from 'vitest';
import { isSameTree } from '../029-sameTree';
import { buildTree } from './treeHelpers';

describe('isSameTree', () => {
  it('should return true for identical trees', () => {
    const p = buildTree([1, 2, 3]);
    const q = buildTree([1, 2, 3]);
    expect(isSameTree(p, q)).toBe(true);
  });

  it('should return false for different tree values', () => {
    const p = buildTree([1, 2]);
    const q = buildTree([1, null, 2]);
    expect(isSameTree(p, q)).toBe(false);
  });

  it('should return true for two empty trees', () => {
    expect(isSameTree(null, null)).toBe(true);
  });
});