// Running Minimum
export function maxProfit(prices: number[]): number {

    // Solucion 4 - Optima - solo necesito recordar lo relevante del pasado

    // Iniciamos con 0 profit y el precio minimo es el primero que vemos
    let profit = 0;
    let minPrice = prices[0];


    for (let i = 0; i < prices.length; i++) {
    
        // Almacenamos el precio minimo visto hasta el momento
        minPrice = Math.min(minPrice, prices[i]);

        // Y nuestro profit sera el valor maximo entre el maximo que tenemos
        // y la resta del actual menos el minimo visto hasta el momento
        // Si alguno es mas alto que el mas alto hasta ahora, entonces guardamos ese
        profit = Math.max(profit, prices[i] - minPrice);
    }
    return profit;
};