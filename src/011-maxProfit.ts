export function maxProfit(prices: number[]): number {

    // Solucion 1 - Funciona a medias
    // if (prices.length < 2) {
    //     return 0;
    // }

    // let enterDayIndex = 0;
    // let enterDay = Math.max(...prices);
    // let min = Math.max(...prices);
    // for (let i = 0; i < prices.length; i++) {
    //     const current = prices[i];
    //     min = Math.min(min, current);
    //     if (current === min) {
    //         enterDay = Math.min(enterDay, min)
    //         if (enterDay === min) {
    //             enterDayIndex = i;
    //         }
    //     }
    // }

    // let exitDay = 0, max = 0;
    // for (let i = enterDayIndex; i < prices.length; i++) {
    //     const current = prices[i];
    //     max = Math.max(max, current);
    //     if (current === max) {
    //         exitDay = Math.max(exitDay, max)
    //     }
    // }

    // const result = exitDay - enterDay
    // return result < 0 ? 0 : result;

    // Solucion 2 - piensa como el cubo de agua
    // let maxProfit = 0;
    // let left = 0, right = prices.length - 1;
    // while (left < right) {        
    //     const leftValue = prices[left], rightValue = prices[right];
    //     const profit = rightValue - leftValue;
    //     maxProfit = Math.max(maxProfit, profit);

    //     if(rightValue < leftValue) {
    //         left++;
    //     } else {
    //         right--;
    //     }
    // }

    // left = 0, right = prices.length - 1;
    // while (left < right) {        
    //     const leftValue = prices[left], rightValue = prices[right];
    //     const profit = rightValue - leftValue;
    //     maxProfit = Math.max(maxProfit, profit);

    //     if(rightValue < leftValue) {
    //         right--;
    //     } else {
    //         left++;
    //     }
    // }


    // return maxProfit;

    // solucion 3 - Funcional O(n2)
    // let profit = 0;
    // let minPrice = Math.max(...prices)
    // for (let i = 0; i < prices.length - 1; i++) {
    //     if (prices[i] < minPrice) {
    //         minPrice = prices[i];
    //     } else {
    //         continue;
    //     }

    //     for (let j = i+1; j < prices.length; j++) {
    //         profit = Math.max(profit, prices[j] - prices[i])
    //     }
    // }
    // return profit


    // Solucion 4 - Optima - solo necesito recordar lo relevante del pasado
    // Running Minimum
    let profit = 0;
    let minPrice = prices[0];
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        profit = Math.max(profit, prices[i] - minPrice);
    }
    return profit;
};