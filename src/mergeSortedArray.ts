/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): void {
  // Solucion 1 - Meter en los ceros y ordenar - O(n log n)
  // for (let i = m, j = 0; i < nums1.length; i++) {
  //   nums1[i] = nums2[j];
  //   j++;
  // }
  // nums1 = nums1.sort((a, b) => a - b);

  // Solucion 2 - Despues de entender el problema O(n)
  // Empezamos desde atras porque hay espacios donde meter valores
  // Vamos metiendo el mayor y moviendo el puntero hacia atras
  // Usamos 2 punteros para seguir los 2 arrays
  // Hacemos el loop mientras hayan elementos que meter en el array final

  let final = nums1.length - 1;
  let final1 = m - 1;
  let final2 = n - 1;
  while (final2 >= 0) {
    if (final1 >= 0 && nums1[final1] >= nums2[final2]) {
      nums1[final] = nums1[final1];
      final1--;
    } else {
      nums1[final] = nums2[final2];
      final2--;
    }
    final--;
  }
}
