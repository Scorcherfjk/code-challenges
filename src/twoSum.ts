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
    const map = new Map<number, number>()

    // For simple es mas rápido
    for (let index = 0; index < nums.length; index++) {
        const rest = target - nums[index];

        // Busqueda del Map es O(1)
        if (map.has(rest)) {
            const complement = map.get(rest)!;
            return [complement, index];
        }

        map.set(nums[index], index);
    }
    
    return [];
};