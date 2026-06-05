export function search(nums: number[], target: number): number {
  // Solucion 1 - Intento de recursividad
  // const middle = Math.ceil(nums.length / 2);

  // if (!nums.length || middle === 0) return -1;
  // if (nums[middle] === target) {
  //     return middle;
  // }

  // if (nums[middle] > target) {
  //     return search(nums.slice(0, middle), target)
  // } else {
  //     return search(nums.splice(middle), target)
  // }

  // Solucion 2, con while, como si fuera una ventana
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    const guess = nums[middle];
    if (guess === target) {
      return middle;
    }

    if (guess < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
