export function isPalindrome(s: string): boolean {
  const clean = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  // Solucion 1 - Directa
  // return clean === clean.split('').reverse().join('');

  // Solucion 2 - Algoritmo
  // let left = 0
  // let right = clean.length - 1;
  // for (;left < clean.length / 2;) {
  //     if (clean[left] !== clean[right]) return false
  //     right--
  //     left++
  // }

  // Solucion 3 - While
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }

    right--;
    left++;
  }
  return true;
}
