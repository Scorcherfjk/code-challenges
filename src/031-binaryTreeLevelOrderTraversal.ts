/*
 * OUTPUT: Recorrer el árbol binario por niveles y devolver los valores por nivel
 * ALGORITMO: BFS con cola para agrupar nodos por profundidad
 * SKILL: Tree + Breadth-First Search
 */
import { TreeNode } from "./utils/ThreeNode";

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const queue = [root];
  const result: number[][] = [];

  while (queue.length > 0) {
    const size = queue.length;
    const currentLevel = [];

    for (let i = 0; i < size; i++) {
      const current = queue.shift();

      currentLevel.push(current!.val);
      if (current?.left) queue.push(current?.left);
      if (current?.right) queue.push(current?.right);
    }

    result.push(currentLevel);
  }

  return result;
}
