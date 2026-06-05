export function isValid(s: string): boolean {
    // Solucion 1 - Valida - Mi version sin feedback 
    // const open = new Set(['(', '[', '{']);
    // const close = new Map([[')', '('],[']', '['],['}', '{']]);
    // let openPendingChars = [];
    // for (let i = 0; i < s.length; i++) {
    //     const currentChar = s[i];

    //     if (open.has(currentChar)) {
    //         openPendingChars.push(currentChar);
    //     }

    //     if (close.has(currentChar)) {
    //         const latestOpen = openPendingChars.pop();
    //         if (close.get(currentChar) !== latestOpen) {
    //             return false;
    //         }
    //     }
    // }

    // if (openPendingChars.length) return false;
    // return true;


    const close = new Map([[')', '('],[']', '['],['}', '{']]);
    let openPendingChars = [];
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (close.has(currentChar)) {
            const latestOpen = openPendingChars.pop();
            if (close.get(currentChar) !== latestOpen) {
                return false;
            }
        } else {
            openPendingChars.push(currentChar);
        }
    }

    return openPendingChars.length === 0;
};