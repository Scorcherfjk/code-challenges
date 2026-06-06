/*
 * OUTPUT: Encontrar el subarray de menor longitud cuya suma es >= target
 * ALGORITMO: Sliding window expandiendo derecha y contrayendo izquierda cuando suma es suficiente
 * SKILL: Sliding Window
 */
export function minSubArrayLen(target: number, nums: number[]): number {

    // Solucion 1 - Mia Funcional
    // let left = 0;
    // let right = 0;
    // let len = Infinity;

    // let sum = nums[left];
    // while (right < nums.length) {
    //     const space = right - left + 1;
    //     if (sum >= target) {
    //         if (len > space){
    //             len = space;
    //         }
    //         sum -= nums[left];
    //         left++;

    //     } else if (sum < target) {
    //         right++;
    //         if (right < nums.length) {
    //             sum += nums[right];
    //         }
    //     }  
    // }

    // return len === Infinity ? 0 : len;


    // Solucion 2 - Guiada

    // Vamos a tener 2 punteros, left y right
    let left = 0;

    // Y 2 acumuladores, uno inicia en Infinity para poder calcular un minimo.
    let len = Infinity;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {

        // emepzamos sumando el primer elemento
        sum += nums[right];

        // mientras la suma de los elemento sea mayor al target,
        // moveremos left para sacar elementos de la ventana
        while (sum >= target) {
            const space = right - left + 1;
            if (len > space) {
                // Guardamos la distancia mas corta encontrada,
                // o el espacio mas corto que se ha encontrado entre 2 numeros
                len = space;
            }

            // Los elementos se sacan al restar su valor,
            // no es como un array, porque tendriamos que estar sumando cada vez
            sum -= nums[left];
            left++;
        }
    }

    // Al final puede que no se consiga ningun valor y no podemos retornar Infinity
    return len === Infinity ? 0 : len;
};  