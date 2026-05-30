export function maxArea(height: number[]): number {
    let max = 0;

    // Solucion 1 - Fuerza Bruta - Muere con muchos valores
    // const finalIndex = height.length - 1;
    // for (let i = 0; i < finalIndex; i++){
    //     for (let j = finalIndex; j > i; j--){
    //         const lower = Math.min(height[i], height[j]);
    //         const quantity = lower * (j - i);
    //         max = Math.max(max, quantity);
    //     }
    // }

    // Solucion 2 - Optima
    let start = 0, end = height.length - 1;
    while (start < end) {
        const lower = Math.min(height[start], height[end]);
        
        // Formula matemática del calculo
        max = Math.max(max, lower * (end - start));
    
        if (height[start] > height[end]) {
            end--;
        } else {
            start++;
        }
    }
    return max;
};