// RSA = Rotated Sorted Array

/*
 * OBJETIVO: Encontrar el elemento mínimo en un array rotado ordenado
 * ALGORITMO: Búsqueda binaria identificando cuál mitad está ordenada
 */
export function findMinRSA(nums: number[]): number {
  // Solucion 1 - via facil y diaria
  // return Math.min(...nums);

  // Solucion 2 - Puede ser buena pero si el minimo esta a la mitad es O(n)
  // let left = 0;
  // let right = nums.length - 1;

  // if (left === right) {
  //     return nums[left];
  // }

  // while (left <= right) {
  //     const first = nums[left];
  //     const last = nums[right];

  //     if (first < last) {
  //         const next = nums[left + 1];
  //         if (next > first){
  //             return first;
  //         }
  //         left++;
  //     } else {
  //         const prev = nums[right - 1];
  //         if (prev > last){
  //             return last;
  //         }
  //         right--;
  //     }
  // }

  // Usando Binary Search
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    const guess = nums[mid];
    const last = nums[high];

    if (last < guess) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return nums[low];
}
