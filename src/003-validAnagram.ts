export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // Solucion 1 - Fallida - cacc != aacc

  // const sSet = new Set(Array.from(s));
  // const tSet = new Set(Array.from(t));

  // for (const value of [...sSet]) {
  //     if (!tSet.has(value)) return false;
  // }

  // Solucion 2
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    map.set(t[i], (map.get(t[i]) || 0) - 1);
  }

  for (const value of map.values()) {
    if (value !== 0) return false;
  }

  return true;
}
