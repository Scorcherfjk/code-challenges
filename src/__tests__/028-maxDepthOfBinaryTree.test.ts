import { describe, it, expect } from 'vitest';
import { maxDepth } from '../028-maxDepthOfBinaryTree';
import { buildTree } from './treeHelpers';

describe('maxDepth', () => {
  it('should return 0 for an empty tree', () => {
    expect(maxDepth(null)).toBe(0);
  });

  it('should return the correct depth for a balanced tree', () => {
    const root = buildTree([3, 9, 20, null, null, 15, 7]);
    expect(maxDepth(root)).toBe(3);
  });

  it('should return the correct depth for a single-node tree', () => {
    const root = buildTree([1]);
    expect(maxDepth(root)).toBe(1);
  });
});