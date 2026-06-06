/*
 * OUTPUT: Verificar si los paréntesis están balanceados y correctamente emparejados
 * ALGORITMO: Stack para emparejar paréntesis de apertura con cierre
 * SKILL: Stack
 */
export function isValid(s: string): boolean {

    // Establecemos un diccionario de correspondencias con el de cierre,
    // es decir, '}' debe cerrar a '{'. Usamos un Map para busquedas O(1)
    const close = new Map([[')', '('],[']', '['],['}', '{']]);
    let openPendingChars = [];
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        // Evaluamos el caracter para saber si es uno de cierre
        if (close.has(currentChar)) {

            // 2. sacamos el ultimo de los pendiente
            const latestOpen = openPendingChars.pop();

            // si no corresponde al ultimo de apertura pendiente entonces no es valido
            if (close.get(currentChar) !== latestOpen) {
                return false;
            }
        } else {

            // 1. Si es de apertura lo metemos entre los pendientes por cerrar
            openPendingChars.push(currentChar);
        }
    }

    // Si queda alguno pendiente, entonces tampoco es valido
    return openPendingChars.length === 0;
};