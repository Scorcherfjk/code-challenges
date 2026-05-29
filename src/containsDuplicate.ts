export function containsDuplicate(nums: number[]): boolean {
  // Solucion 1 - mi usual
  return nums.length !== new Set(nums).size;

  // Solucion 2 - Algoritmo explicado
  // const seen = new Set<number>();
  // for (const num of nums) {
  //     if (seen.has(num)) return true;
  //     seen.add(num);
  // }

  // return false;
};