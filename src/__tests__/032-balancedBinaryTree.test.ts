import { describe, it, expect } from 'vitest';
import { isBalanced } from '../032-balancedBinaryTree';
import { buildTree } from './treeHelpers';

describe('isBalanced', () => {
  it('should return true for an empty tree', () => {
    expect(isBalanced(null)).toBe(true);
  });

  it('should return true for a balanced tree', () => {
    const root = buildTree([3, 9, 20, null, null, 15, 7]);
    expect(isBalanced(root)).toBe(true);
  });

  it('should return false for an unbalanced tree', () => {
    const root = buildTree([1, 2, 2, 3, 3, null, null, 4, 4]);
    expect(isBalanced(root)).toBe(false);
  });
});