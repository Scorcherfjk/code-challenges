/*
 * OUTPUT: Encontrar un target en un array ordenado
 * ALGORITMO: Búsqueda binaria dividiendo el rango de búsqueda por la mitad
 * SKILL: Binary Search
 */
export function search(nums: number[], target: number): number {
  // Iniciamos con 2 punteros, uno al inicio y otro al final
  let left = 0;
  let right = nums.length - 1;

  // Aqui los punteros pueden pisarse porque llegaran a un mismo objetivo
  while (left <= right) {

    // encontramos el medio del array
    let middle = Math.floor((left + right) / 2);
    const guess = nums[middle];

    // Si llegamos al target, retornamos la ubicacion
    if (guess === target) {
      return middle;
    }

    // Si el objetivo es menor al objetivo
    if (guess < target) {
      
      // movemos el limite izquierdo a la mitad
      // y descartamos la mitad derecha del array
      left = middle + 1;
    } else {

      // sino movemos el limite derecho a la mitad
      // y descartamos la mitad izquierda del array
      right = middle - 1;
    }
  }

  // Retornamos -1 si no encontramo nada
  return -1;
}
