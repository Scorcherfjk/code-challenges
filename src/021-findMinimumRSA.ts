// RSA = Rotated Sorted Array

/*
 * OUTPUT: Encontrar el elemento mínimo en un array rotado ordenado
 * ALGORITMO: Búsqueda binaria identificando cuál mitad está ordenada
 * SKILL: Binary Search
 */
export function findMinRSA(nums: number[]): number {
  // Solucion 1 - via facil y diaria
  // return Math.min(...nums);

  // Usando Binary Search y sus dos punteros
  let low = 0;
  let high = nums.length - 1;

  // Aqui los punteros NO pueden pisarse
  while (low < high) {

    // encontramos la mitad
    let mid = Math.floor((low + high) / 2);
    const guess = nums[mid];
    const last = nums[high];

    // No tenemos valor objetivo, solo seguimos buscando

    // Si el ultimo del array es menor al de la mitad
    if (last < guess) {

      // movemos el limite menor a la mitad + 1 y seguimos buscando
      // Descartamos el medio porque ya sabemos que hay uno menor a este, que es "last"
      low = mid + 1;
    } else {

      // sino movemos el limite mayor a la mitad para ser inclusivo com ese valor
      high = mid;
    }
  }

  return nums[low];
}
