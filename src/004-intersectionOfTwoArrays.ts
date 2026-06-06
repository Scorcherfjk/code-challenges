/*
 * OUTPUT: Encontrar elementos comunes entre dos arrays
 * ALGORITMO: Set del primer array para búsqueda O(1), iterar el segundo para encontrar coincidencias
 * SKILL: Set
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
  // Esta solucion usa los metodos internos de los Set O(n)
  // return [...new Set(nums1).intersection(new Set(nums2))];

  // Solucion 2
  // Iniciamos un set para busquedas O(1)
  const set1 = new Set(nums1);
  const intersection: number[] = [];

  // Recorremos todos los elementos
  for (const value of new Set(nums2)) {
    
    // Si encontramos algun repetido
    if (set1.has(value)) {
    
      // significa que forma parte de la interseccion y lo anadimos
      intersection.push(value);
    }
  }

  return intersection;
}
