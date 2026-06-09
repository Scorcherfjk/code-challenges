/*
 * OUTPUT: Calcular la profundidad máxima de un árbol binario
 * ALGORITMO: Recorrer recursivamente y sumar 1 al mayor de las profundidades de subárboles
 * SKILL: Tree + Depth-First Search
 */
import { TreeNode } from "./utils/ThreeNode";

export function maxDepth(root: TreeNode | null): number {
  // caso base para la hoja
  if (!root) return 0;

  // Busco a la derecha y a la izquierda
  const maxLeft = maxDepth(root.left);
  const maxRight = maxDepth(root.right);

  // retorno el conteo actual mas el maximo hasta ahora
  return 1 + Math.max(maxLeft, maxRight);
}
