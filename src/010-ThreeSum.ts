export function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const results: number[][] = []
    for (let current = 0; current < nums.length; current++) {

        // Si el valor actual fue analizado antes o es el primero, saltamos
        if (current > 0 && nums[current] === nums[current - 1]) {
            continue;
        }

        // los dos puntero van desde i+1 hasta el final del array
        let left = current + 1, right = nums.length - 1;
        while (left < right) {

            // Aqui si sumamos
            const sum = nums[current] + nums[left] + nums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                // Si la suma da 0, movemos ambos
                results.push([nums[current], nums[left], nums[right]]);
                left++; right--;


                // Si alguno de los punteros al moverse es igual a su valor anterior
                // lo movemos de nuevo
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }

        }
    }

    return results;
};