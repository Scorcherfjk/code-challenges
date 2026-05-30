export function sortedSquares(nums: number[]): number[] {
  // Solucion 1 - Desarrollo tipico
  // return nums.map(x => x ** 2).sort((a,b) => a - b)

  const result: number[] = new Array(nums.length);

  let start = 0;
  let end = nums.length - 1;
  let length = nums.length - 1;

  while (start <= end) {
    const first = nums[start] ** 2;
    const last = nums[end] ** 2;

    if (first > last) {
      result[length] = first;
      start++;
    } else {
      result[length] = last;
      end--;
    }
    length--;
  }

  return result;
}
