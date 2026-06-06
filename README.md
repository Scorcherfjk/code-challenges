Soluciones comentadas - Leet Code
================================

Descripción
-----------

Este repositorio contiene soluciones a problemas de LeetCode escritas en TypeScript. Cada archivo en `src/` implementa una única solución con fines didácticos: el código incluye comentarios inline que explican paso a paso la lógica y, además, un bloque antes de la función principal que resume en forma clara qué devuelve la solución y qué técnica se practica.

Formato de comentarios (agregado antes de la función o clase exportada)
------------------------------------------------------------------

Cada solución incluye un bloque de comentario con el siguiente formato en español:

```js
/*
 * OUTPUT: [qué devuelve la función]
 * ALGORITMO: [breve descripción de cómo lo resuelve el código]
 * SKILL: [técnica que se entrena: Hash Map, Two Pointers, Sliding Window, Binary Search, Stack, etc.]
 */
```

Además, el código dentro de la función mantiene comentarios inline explicativos y (cuando aplica) soluciones alternativas comentadas para aprendizaje.

Estructura del repositorio
--------------------------

- `package.json`, `tsconfig.json` — configuración del proyecto
- `src/` — soluciones, un archivo por problema (ej: `001-twoSum.ts`)
- `src/__tests__/` — tests unitarios que validan cada solución

Lista de ejercicios (orden cronológico según el archivo original)
---------------------------------------------------------------

**Leet Code**

- [x] Two Sum
- [x] Contains Duplicate
- [x] Valid Anagram
- [x] Intersection of Two Arrays
- [x] Group Anagrams
- [x] Valid Palindrome
- [x] Merge Sorted Array
- [x] Squares of a Sorted Array
- [x] Container With Most Water
- [x] 3Sum
- [x] Best Time to Buy and Sell Stock
- [x] Longest Substring Without Repeating Characters
- [x] Permutation in String
- [x] Minimum Size Subarray Sum
- [x] Valid Parentheses
- [x] Min Stack
- [x] Evaluate Reverse Polish Notation
- [x] Daily Temperatures
- [x] Binary Search
- [x] Search Insert Position
- [x] Find Minimum in Rotated Sorted Array
- [x] Search in Rotated Sorted Array
- [ ] Sqrt(x)
- [ ] Reverse Linked List
- [ ] Merge Two Sorted Lists
- [ ] Linked List Cycle
- [ ] Remove Nth Node From End
- [ ] Maximum Depth of Binary Tree
- [ ] Same Tree
- [ ] Invert Binary Tree
- [ ] Binary Tree Level Order Traversal

Cómo ejecutar los tests
-----------------------

Desde la raíz del proyecto:

```bash
npm install
npm test
```
