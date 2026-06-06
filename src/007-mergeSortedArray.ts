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

  // 3 punteros (una locura)
  let finalTotal = nums1.length - 1; // Final del array L
  let finalL = m - 1; // final de los numeros validos en el array L
  let finalS = n - 1; // final del array S (pendientes de introducir)


  // Mientras hayan numeros pendientes por introducir
  // Porque cuando se hayan acabado, los del array L ya estaran ordenados al inicio
  while (finalS >= 0) {

    // Aun hay elementos en el array L y este en mayor al mas alto del array S
    if (finalL >= 0 && nums1[finalL] >= nums2[finalS]) {
      
      // Lo reacomodamos al final y retrocedemos el puntero L
      nums1[finalTotal] = nums1[finalL];
      finalL--;
    } else {

      // Si el mayor es el ultimo del array S,
      // lo guaradamos y retrocedemos el puntero S
      nums1[finalTotal] = nums2[finalS];
      finalS--;
    }

    // Retrocedemos el puntero total
    finalTotal--;
  }
}
