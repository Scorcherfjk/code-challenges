/*
 * OBJETIVO: Retornar cuadrados de números en orden (array entrada ordenado)
 * ALGORITMO: Two pointers desde extremos, ya que los mayores cuadrados están en los bordes
 */
export function sortedSquares(nums: number[]): number[] {
  // Solucion 1 - Desarrollo tipico O(n log n)
  // return nums.map(x => x ** 2).sort((a,b) => a - b)

  // Es importante saber que los numero vienen ordenados 
  // pero al obtener el cuadrado se desordenan esto es porque 
  // el cuadrado de numeros negativos da lo mismo que los positivos
  // Ejm -3^2 = 9 y 3^2 = 9;
  // Por lo tanto los numeros mas altos siempre estaran en los extremos

  // Vamos con la misma logica de MergeSorted,
  // pero como no tenemos Array L, creamos el nuestro
  const result: number[] = new Array(nums.length);

  // Tenemos 3 punteros
  let start = 0;
  let end = nums.length - 1;
  let length = nums.length - 1;

  while (start <= end) {
    const first = nums[start] ** 2;
    const last = nums[end] ** 2;

    // Preguntamos cual es el extremo mas alto
    // e introducimos el correspondiente
    if (first > last) {
      result[length] = first;
      start++;
    } else {
      result[length] = last;
      end--;
    }

    // retrocedemos en los espacios disponibles
    length--;
  }

  return result;
}
