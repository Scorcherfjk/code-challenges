export function groupAnagrams(strs: string[]): string[][] {

    const map = new Map<string, string[]>()

    // Solucion 1
    for (const str of strs) {
        const baseWord = str.split('').sort().join('');
        const coincidence: string[] = map.get(baseWord) || [];
        coincidence.push(str);
        map.set(baseWord, coincidence)
    }

    // Solucion 2
    // for (const str of strs) {
    //     const baseWord = str.split('').sort().join('');

    //     if(!map.has(baseWord)) map.set(baseWord, [])
    //     map.get(baseWord)!.push(str);
    // }

    return [...map.values()]
};