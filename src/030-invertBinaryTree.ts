/*
 * OUTPUT: Invertir un árbol binario intercambiando hijos izquierdo y derecho
 * ALGORITMO: Recorrer el árbol recursivamente e invertir los subárboles
 * SKILL: Tree + Recursion
 */
import { TreeNode } from "./utils/ThreeNode";

export function invertTree(root: TreeNode | null): TreeNode | null {
  // Si llegamos al fondo retornamos null
  if (!root) return null;

  // Sino los invertimos mientra los invertimos jaja
  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  // Al final retornamos el mismo root que esta al reves
  return root;
}
