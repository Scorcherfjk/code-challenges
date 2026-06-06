// Slidding Window

/*
 * OBJETIVO: Encontrar la longitud del substring más largo sin caracteres repetidos
 * ALGORITMO: Sliding window con Set para rastrear caracteres en la ventana actual
 */
export function lengthOfLongestSubstring(s: string): number {
  // Solucion 3

  // Iniciamos nuestro contador y acumulador de caracteres
  let max = 0;
  const set = new Set();
  
  // Iniciamos los dos punteros desde 0
  let left = 0;
  let right = 0;

  // Avanzamos hasta llegar al final
  while (right < s.length) {

    // Paso 2: Si encontramos algun repetido a la derecha,
    // reducimos la ventana a la izquierda mientras ese caracter siga dentro
    // Ejm: para "pawkew" left = 0 y right = 5 
    // por lo que hay que empezar a mover left hasta que sea 3 y ya no tenga la otra w dentro
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    // Paso 1: Ampliamos la ventana a la derecha
    set.add(s[right]);

    // Actualizamos nuestro contador con el valor maximo visto
    max = Math.max(max, set.size);
    right++
  }

  return max;

}
