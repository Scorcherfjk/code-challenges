/*
 * OUTPUT: Determinar si un árbol binario está equilibrado
 * ALGORITMO: Recursividad con altura de subárbol y detección anticipada de desequilibrio
 * SKILL: Tree + Depth-First Search
 */
import { TreeNode } from "./utils/ThreeNode";

function helper(root: TreeNode | null): number {
  if (!root) return 0;

  // 1. Le pedimos la altura al lado izquierdo
  const leftHeight = helper(root.left);
  if (leftHeight === -1) return -1;

  // 2. Le pedimos la altura al lado derecho
  const rightHeight = helper(root.right);
  if (rightHeight === -1) return -1;

  // 3. Revisamos el nodo actual.
  // Si la diferencia de alturas es mayor a 1, ¡este nodo está desbalanceado!
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1; // Disparamos nuestro propio botón de pánico
  }

  // 4. Si todo está perfectamente sano, calculamos la altura real como siempre
  return Math.max(leftHeight, rightHeight) + 1;
}

export function isBalanced(root: TreeNode | null): boolean {
  return helper(root) !== -1;
}
