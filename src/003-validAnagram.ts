// Ejm: hello -> lohel
// 1: h1,l-1  
// -> 2: h1,e1,l-1,o-1
// ->-> 3: h1,e1,l0,o-1
// ->->-> 4: h0,e1,l0,o-1
// ->->->-> 5: h0,e0,l1,o-1
// ->->->->-> 6: h0, e0, l0, o0

/*
 * OBJETIVO: Verificar si dos strings son anagramas (mismas letras, diferente orden)
 * ALGORITMO: Hash map para contar frecuencias de caracteres en ambos strings
 */
export function isAnagram(s: string, t: string): boolean {
  // Si no tienen la misma longitud no son anagramas
  if (s.length !== t.length) return false;

  // Iniciamos creando un mapa de frecuencias
  const map = new Map<string, number>();

  // Recorremos todos los elementos para evaluarlos uno por uno
  for (let i = 0; i < s.length; i++) {

    // Empezamos a gestionar las frecuencias
    // Aumentamos las coincidencias en el string inicial
    map.set(s[i], (map.get(s[i]) || 0) + 1);

    // Reducimos las coincidencias en el string objetivo
    map.set(t[i], (map.get(t[i]) || 0) - 1);

    // Este aumento/decremento mantiene las frecuencias en cero
    // Que no hayan mas ni menos de alguna letra
  }

  // Si hay mas o menos que alguna letra
  // Entonces no es un anagrama valido
  for (const value of map.values()) {
    if (value !== 0) return false;
  }

  // Si todas las frecuencias son cero
  // Entonces si es un anagrama valido
  return true;
}
