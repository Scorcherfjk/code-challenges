import { TreeNode } from '../utils/ThreeNode';

export function buildTree(values: Array<number | null>): TreeNode | null {
  if (values.length === 0) return null;

  const root = new TreeNode(values[0]!);
  const queue: Array<TreeNode | null> = [root];
  let index = 1;

  while (index < values.length) {
    const node = queue.shift();
    if (!node) {
      index += 2;
      continue;
    }

    const leftValue = values[index];
    if (leftValue !== null && leftValue !== undefined) {
      node.left = new TreeNode(leftValue);
      queue.push(node.left);
    } else {
      node.left = null;
      queue.push(null);
    }
    index += 1;

    if (index >= values.length) break;

    const rightValue = values[index];
    if (rightValue !== null && rightValue !== undefined) {
      node.right = new TreeNode(rightValue);
      queue.push(node.right);
    } else {
      node.right = null;
      queue.push(null);
    }
    index += 1;
  }

  return root;
}

export function treeEquals(a: TreeNode | null, b: TreeNode | null): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.val !== b.val) return false;
  return treeEquals(a.left, b.left) && treeEquals(a.right, b.right);
}

export function treeToArray(root: TreeNode | null): Array<number | null> {
  const result: Array<number | null> = [];
  const queue: Array<TreeNode | null> = [root];

  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      result.push(null);
      continue;
    }

    result.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }

  while (result.length && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}
