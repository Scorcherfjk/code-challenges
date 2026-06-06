// Para este problema que son permutaciones, llegar a O(n * n log n) no esta mal.
export function groupAnagrams(strs: string[]): string[][] {

  // Iniciamos con un map para tratar de optimizar lo maximo posible
  const map = new Map<string, string[]>();

  for (const str of strs) {
    // A la plabra actual la ordenamos de manera que solo tengamos que 
    // comparar palabras sin sentido pero en el mismo orden siempre O(n log n)
    const baseWord = str.split("").sort().join("");

    // Validamos si ya existe si no, creamos un array vacio
    if (!map.has(baseWord)) map.set(baseWord, []);

    // Insertamos la palabra real en la clave de las letras ordenadas
    map.get(baseWord)!.push(str);
  }

  // retornamos solo los valores sin las palabras de las letras ordenadas
  return [...map.values()];
}
