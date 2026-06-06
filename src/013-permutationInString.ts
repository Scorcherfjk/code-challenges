/*
 * OBJETIVO: Verificar si una permutación de s1 existe como substring de s2
 * ALGORITMO: Sliding window con hash map comparando frecuencias de caracteres
 */
export function checkInclusion(s1: string, s2: string): boolean {
    // Solucion 3 
    
    // si s2 es mas pequeno, no es posible encontrar s1 dentro
    if (s2.length < s1.length) return false;

    // Armamos un mapa de frecuencias de s1
    const frequency = new Map<string, number>();
    for (const char of s1) {
        frequency.set(char, (frequency.get(char) || 0) + 1);
    }

    // Definimos cuantas coincidencias necesitamos en s2
    let requiredMatches = frequency.size;

    for (let i = 0; i < s2.length; i++) {
        const rightChar = s2[i];

        // Si el carácter de s2 nos sirve, reducimos su cuenta en el frequencia
        if (frequency.has(rightChar)) {
            frequency.set(rightChar, frequency.get(rightChar)! - 1);
            if (frequency.get(rightChar) === 0) requiredMatches--;
        }

        // 3. Cuando la ventana supera el tamaño de s1, encogemos por la izquierda
        if (i >= s1.length) {
            const leftChar = s2[i - s1.length]; // El carácter que se queda fuera

            // Verificamos si el caracter era util en el conteo
            if (frequency.has(leftChar)) {
                
                // Si lo era, tenemos que incrementar la frecuencia ya que no suma en la cuenta final
                if (frequency.get(leftChar) === 0) requiredMatches++;
                frequency.set(leftChar, frequency.get(leftChar)! + 1);
            }
        }
        if (requiredMatches === 0) return true;
    }

    return false;
};