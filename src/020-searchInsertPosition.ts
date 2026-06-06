/*
 * OUTPUT: Encontrar posición de target o dónde deber insertarse
 * ALGORITMO: Búsqueda binaria para encontrar posición exacta o de inserción
 * SKILL: Binary Search
 */
export function searchInsert(nums: number[], target: number): number {
  // Iniciamos con 2 punteros, uno al inicio y otro al final
  let low = 0;
  let high = nums.length - 1;

  // Aqui los punteros pueden pisarse porque llegaran a un mismo objetivo
  while (low <= high) {
    // encontramos el medio del array
    let middle = Math.floor((low + high) / 2);
    const guess = nums[middle];

    // Si llegamos al target, retornamos la ubicacion
    if (guess === target) {
      return middle;
    }

    // Si el objetivo es menor al objetivo
    if (guess < target) {
      // movemos el limite izquierdo a la mitad
      // y descartamos la mitad derecha del array
      low = middle + 1;
    } else {
      // sino movemos el limite derecho a la mitad
      // y descartamos la mitad izquierda del array
      high = middle - 1;
    }
  }

  // Retornamos low si no encontramo nada,
  // porque seria la posicion en la que iria
  return low;
}
