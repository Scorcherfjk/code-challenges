export function intersection(nums1: number[], nums2: number[]): number[] {
  // Solucion 1 - Mia, mas corta
  // return [...new Set(nums1).intersection(new Set(nums2))];

  // Solucion 2, fuerza bruta
  const set1 = new Set(nums1);
  const intersection: number[] = [];
  new Set(nums2).forEach((value) => {
    if (set1.has(value)) {
      intersection.push(value);
    }
  });
  return intersection;
}
