export function isPalindrome(s: string): boolean {

  // Comenzamos limpiando el string de todos los caracteres extranos
  const clean = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  // Solucion 1 - Directa
  // Si es igual a si misma al reves, es un palindromo
  // return clean === clean.split('').reverse().join('');

  // Solucion 3 - While
  // Establecemos 2 punteros para ir en las dos direcciones
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {

    // si de adelante hasta el medio (->) es diferente a de atras hasta el medio (<-),
    // entonces no es un palindromo, el medio exacto no es tan importante.
    if (clean[left] !== clean[right]) {
      return false;
    }

    right--;
    left++;
  }

  // si no hubo errores, es un palindromo
  return true;
}
