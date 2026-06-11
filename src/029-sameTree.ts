/*
 * OUTPUT: Determinar si dos árboles binarios son idénticos
 * ALGORITMO: Recorrer ambos árboles en paralelo y comparar valores y estructura
 * SKILL: Tree + Depth-First Search
 */
import { TreeNode } from "./utils/ThreeNode";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Si ambos son null, llegamos al fondo
  if (!p && !q) return true;

  // Si alguno tiene valor y el otro no, o son diferentes, entonces no son el mismo
  if (!p || !q) return false;
  if (p.val !== q.val) return false;

  // Nos vamos recursivamente a la siguiente rama
  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);

  // Y si ambos son iguales, esta expresion retornara
  // true en cascada al llegar al llegar al fondo
  return left && right;
}
