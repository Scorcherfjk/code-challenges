import { describe, it, expect } from 'vitest';
import { invertTree } from '../030-invertBinaryTree';
import { buildTree, treeToArray } from './treeHelpers';

describe('invertTree', () => {
  it('should invert a balanced binary tree', () => {
    const root = buildTree([4, 2, 7, 1, 3, 6, 9]);
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([4, 7, 2, 9, 6, 3, 1]);
  });

  it('should return null for an empty tree', () => {
    expect(invertTree(null)).toBeNull();
  });
});