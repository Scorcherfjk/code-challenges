// RSA = Rotated Sorted Array

/*
 * OUTPUT: Buscar un target en un array rotado ordenado
 * ALGORITMO: Búsqueda binaria identificando qué mitad está ordenada para buscar correctamente
 * SKILL: Binary Search
 */
export function searchRSA(nums: number[], target: number): number {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        const guess = nums[mid];
        const last = nums[right];
        const first = nums[left];

        // Si es mid pues que suerte
        if (guess === target) {
            return mid;
        }

        // La posicion inicial es menor que el medio? 
        if (first <= guess) {
            // Si! entonces la mitad izquierda esta ordenada!

            // Nuestro numero esta entre el menor y el medio
            if (first <= target && target <= guess) {

                // Si, descartamos el lado derecho
                right = mid - 1;
            } else {

                // No, descartamos el lado izquierdo 
                left = mid + 1;
            }
        } else {
            // No lo es! la mitad izquierda esta desordenada 

            // Nuestro numero esta en la mitad derecha ordenada
            if (last >= target && target > guess) {

                // Si, descartamos la mitad izquierda
                left = mid + 1;
            } else {

                // No, descartamos la mitad derecha
                right = mid - 1;
            }
        }
    }

    return -1;

};