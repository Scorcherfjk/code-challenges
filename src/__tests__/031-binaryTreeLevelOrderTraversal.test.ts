import { describe, it, expect } from 'vitest';
import { levelOrder } from '../031-binaryTreeLevelOrderTraversal';
import { buildTree } from './treeHelpers';

describe('levelOrder', () => {
  it('should return level order traversal for a balanced tree', () => {
    const root = buildTree([3, 9, 20, null, null, 15, 7]);
    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });

  it('should return an empty array for a null tree', () => {
    expect(levelOrder(null)).toEqual([]);
  });

  it('should return single-level traversal for a single-node tree', () => {
    const root = buildTree([1]);
    expect(levelOrder(root)).toEqual([[1]]);
  });
});