export function containsDuplicate(nums: number[]): boolean {
  // Solucion 1 - mi usual
  // return nums.length !== new Set(nums).size;

  // Solucion 2 - Algoritmo explicado
  // Creamos un Set para busquedas O(1);
  const seen = new Set<number>();

  // Empezamos a recorrer los elementos
  for (const num of nums) {

    // Si ya habiamos visto ese elemento
    // entonces hay duplicados, no vale la pena seguir.
    if (seen.has(num)) return true;

    // Si no, guardamos el valor, para validar mas adelante
    seen.add(num);
  }

  return false;
}
