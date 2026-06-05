export function checkInclusion(s1: string, s2: string): boolean {
    if (s2.length < s1.length) return false;

    // Solucion 1 - Sin letras repetidas
    // let set = new Set(s1.split(''));
    // const size = s1.length;
    // let left = 0;
    // let counter = 0;
    // for (let i = 0; i < s2.length; i++) {
    //     left = i;
    //     while (set.has(s2[left])) {
    //         counter++;
    //         left++;
    //     }

    //     if (counter === size) {
    //         return true;
    //     } else {
    //         counter = 0;
    //     }
    // }

    // Solucion 2 - Si para pero recrear el Map toma tiempo
    // let frecuencyS1 = new Map();
    // for (let i = 0; i < s1.length; i++) {
    //     frecuencyS1.set(s1[i], (frecuencyS1.get(s1[i]) || 0) + 1);
    // }

    // let temp = new Map(frecuencyS1.entries())
    // const size = s1.length;
    // let counter = 0;
    // for (let i = 0; i < s2.length; i++) {
    //     let left = i;
    //     while (temp.has(s2[left]) && temp.get(s2[left]) > 0) {
    //         temp.set(s2[left], temp.get(s2[left]) - 1 );
    //         counter++;
    //         left++;
    //     }

    //     if (counter === size) {
    //         return true;
    //     } else {
    //         counter = 0;
    //         temp = new Map(frecuencyS1.entries())
    //     }
    // }


    // Solucion 3 
    const frequency = new Map<string, number>();
    for (const char of s1) {
        frequency.set(char, (frequency.get(char) || 0) + 1);
    }

    let requiredMatches = frequency.size;

    for (let i = 0; i < s2.length; i++) {
        const rightChar = s2[i];

        // Si el carácter de s2 nos sirve, reducimos su cuenta en el frequencya
        if (frequency.has(rightChar)) {
            frequency.set(rightChar, frequency.get(rightChar)! - 1);
            if (frequency.get(rightChar) === 0) requiredMatches--;
        }

        // 3. Cuando la ventana supera el tamaño de s1, encogemos por la izquierda
        if (i >= s1.length) {
            const leftChar = s2[i - s1.length]; // El carácter que se queda fuera

            if (frequency.has(leftChar)) {
                if (frequency.get(leftChar) === 0) requiredMatches++;
                frequency.set(leftChar, frequency.get(leftChar)! + 1);
            }
        }

        if (requiredMatches === 0) return true;
    }

    return false;
};