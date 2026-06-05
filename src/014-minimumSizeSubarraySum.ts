export function minSubArrayLen(target: number, nums: number[]): number {

    // Solucion 1 - Mia Funcional
    let left = 0;
    let right = 0;
    let len = Infinity;

    let sum = nums[left];
    while (right < nums.length) {
        const space = right - left + 1;
        if (sum >= target) {
            if (len > space){
                len = space;
            }
            sum -= nums[left];
            left++;

        } else if (sum < target) {
            right++;
            if (right < nums.length) {
                sum += nums[right];
            }
        }  
    }

    return len === Infinity ? 0 : len;


    // Solucion 2 - Guiada
    // let left = 0;
    // let len = Infinity;
    // let sum = 0;
    // for (let right = 0; right < nums.length; right++) {
    //     sum += nums[right];
    //     while (sum >= target) {
    //         const space = right - left + 1;
    //         if (len > space) {
    //             len = space;
    //         }
    //         sum -= nums[left];
    //         left++;
    //     }
    // }
    // return len === Infinity ? 0 : len;
};  