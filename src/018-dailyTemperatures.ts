/*
 * OUTPUT: Encontrar días hasta una temperatura más cálida para cada día
 * ALGORITMO: Stack monótono decreciente que almacena índices de días
 * SKILL: Monotonic Stack
 */

// El detalle en este algoritmo es que no es tan importante el valor que tuvo un dia,
// sino que dia pasó, porque para saber que valor tuvo tenemos el array inicial,
// pero saber cuando es el verdadero problema
export function dailyTemperatures(temperatures: number[]): number[] {
  
  // Iniciamos un array vacio para tener las posiciones disponibles
  // Y lo llenamos con ceros porque ese es el valor por defecto
  const results = new Array(temperatures.length).fill(0);
  const stack = [];
  
  for (let day = 0; day < temperatures.length; day++) {
    
    // Si hay algun elemento pendiente en el stack
    // Y la el elemento actual es menor al ultimo en el stack
    while (
      stack.length > 0 &&
      temperatures[day] > temperatures[stack[stack.length - 1]]
    ) {
      const latest = stack.pop()!;

      // el dia al dia actual el ultimo dia y con eso obtenemos la diferencia de dias entre ellos
      results[latest] = day - latest;
    }
    
    // Guardamos el indice porque no dice que dia ocurrio la temperatura
    stack.push(day);
  }

  return results;
}
