/*
 * OUTPUT: Encontrar el área máxima entre dos líneas
 * ALGORITMO: Two pointers desde los extremos, moviendo el lado de menor altura
 * SKILL: Two Pointers
 */
export function maxArea(height: number[]): number {
    

    // Solucion 1 - Fuerza Bruta - Muere con muchos valores
    // let max = 0;
    // const finalIndex = height.length - 1;
    // for (let i = 0; i < finalIndex; i++){
    //     for (let j = finalIndex; j > i; j--){
    //         const lower = Math.min(height[i], height[j]);
    //         const quantity = lower * (j - i);
    //         max = Math.max(max, quantity);
    //     }
    // }
    // return max;


    // Solucion 2 - Optima

    // Inicializamos el contador y los 2 punteros
    let max = 0;
    let start = 0, end = height.length - 1;

    // vamos a ir recortando de cada lado hasta que se encuentren
    while (start < end) {

        // Encontramos el lateral mas bajo
        const lower = Math.min(height[start], height[end]);
        
        // guardamos el maximo
        // Formula matemática del calculo
        max = Math.max(max, lower * (end - start));
    
        // nos quedamos con el mas alto y avanzamos con el otro
        if (height[start] > height[end]) {
            end--;
        } else {
            start++;
        }
    }
    return max;
};