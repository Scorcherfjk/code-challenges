/*
 * OUTPUT: Calcular la raíz cuadrada entera de un número no negativo
 * ALGORITMO: Búsqueda binaria para encontrar el valor más grande cuyo cuadrado es menor o igual a x
 * SKILL: Binary Search
 */
export function mySqrt(x: number): number {
  // Solucion perfectamente valida en un entorno real
  // return Math.floor(Math.sqrt(x));

  // Solucion con BinarySearch
  if (x < 2) {
    return x;
  }

  // Sin un array, nos armamos un ventana con los limites
  let low = 0;
  let high = x;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = mid * mid;

    // Si el cuadrado de la mitad es igual al objetivo no hay mas donde buscar
    if (guess === x) {
      return mid;

      // si es menor movemos el limite menor a la mitad + 1;
    } else if (guess < x) {
      // Sabemos que el limite menor es valido pero no estamos seguros si es el maximo
      // por lo que esperamos es que high llegue a ese numero.
      // aunque en algunos casos terminemos con high < low
      low = mid + 1;

      // si es mayor movemos el limite mayor a la mitad - 1;
    } else {
      // Sabemos que el medio es mayor al objetivo,
      // por lo que el cuadrado de cualquier numero mayor, sera mayor al objetivo
      high = mid - 1;
    }
  }

  // Cuando termina el bucle:
  // high = último valor cuyo cuadrado es <= x
  // low  = primer valor cuyo cuadrado es > x
  return high;
}
