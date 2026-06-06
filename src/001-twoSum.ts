/*
 * OBJETIVO: Encontrar dos números que sumen a un valor objetivo
 * ALGORITMO: Hash map para almacenar números vistos y buscar su complemento en O(1)
 */
export function twoSum(nums: number[], target: number): number[] {
  // Solución 1 - Fuerza Bruta
  // for (const [firstIndex, firstValue] of nums.entries()) {
  //     for (const [secondIndex, secondValue] of nums.entries()) {
  //         if (firstIndex === secondIndex) continue;
  //         const result = firstValue + secondValue;
  //         if (result === target) {
  //             return [firstIndex, secondIndex];
  //         }
  //     }
  // }

  // Solución 2 - HashMap

  // Iniciamos un Map para busquedas O(1)
  const map = new Map<number, number>();

  // Empezamos a recorrer los elementos
  for (let index = 0; index < nums.length; index++) {

    // Le restamos el numero actual al objetivo
    // para encontra un numero que sumado al actual sea igual al objetivo
    // ejm: target = 7, actual = 3. Es una ecuacion simple: 7 - 3 = 4 === 7 = 4 + 3
    const rest = target - nums[index];

    // si ya habiamos pasado por el numero resultante
    // entonces ya tenemos la combinacion correcta
    if (map.has(rest)) {
      const complement = map.get(rest)!;
      return [complement, index];
    }

    // Si aun no lo encontramos, simplemente guardamos el valor
    // por si mas adelante lo necesitamos como complemento
    map.set(nums[index], index);
  }

  // Si llegamos a este punto,
  // significa que ninguna combinacion fue sumo el objetivo
  return [];
}
