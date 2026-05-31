export function lengthOfLongestSubstring(s: string): number {
  // Solucions 1 - funciona, pero no del todo porque no pasa dvdf al hacer el clear
  // const set = new Set();
  // let final = new Set();
  // for (const letter of s) {
  //     if (set.has(letter)) {
  //         set.clear();
  //     }

  //     set.add(letter);
  //     if (set.size > final.size) {
  //         final = new Set([...set])
  //     }

  // }
  // return final.size;

  // Solucion 2 - Fuerza bruta optimizada
  // let max = 0;
  // const set = new Set();
  // for (let left = 0; left < s.length; left++) {
  //     let right = left + 1;
  //     set.add(s[left]);
  //     max = Math.max(max, set.size);
  //     while (right < s.length) {
  //         max = Math.max(max, set.size);
  //         if (set.has(s[right])) {
  //             set.clear()
  //             break;
  //         }
  //         max = Math.max(max, set.size);
  //         set.add(s[right])
  //         right++;
  //     }
  // }

  // return max;

  // Solucion 3
  let max = 0;
  let left = 0;
  const set = new Set();
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, set.size);
  }

  return max;
}
