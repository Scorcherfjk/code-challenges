// RPN = Reversed Polish Notation

/*
 * OUTPUT: Evaluar una expresión en notación polaca inversa
 * ALGORITMO: Stack para números, procesar operadores con los dos últimos números del stack
 * SKILL: Stack
 */
export function evalRPN(tokens: string[]): number {

    const stack : number[] = [];

    // Objeto de operaciones disponibles para no usar un monton de ifs
    const operations: Record<string, (a: number, b: number) => number>= {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,

        // Importante para las divisiones, cortar los decimales
        '/': (a,b) => Math.trunc(a / b),
    };

    for (let i = 0; i < tokens.length; i++) {
        const value = tokens[i];
        
        // Si el elemento no es una operacion, lo agregamos al stack y saltamos
        // Esto se puede haceer a la inversa, pero es basicamente lo mismo 
        if (!Object.hasOwn(operations, value)) {
            stack.push(Number(value));
            continue;
        }

        // Una vez encontramos la operacion,
        // sacamos los dos ultimos valores del stack, tenemos cuidado con el orden para las divisiones
        const operation = operations[value];
        const num2 = stack.pop()!; // el ultimo sera el denominador
        const num1 = stack.pop()!; // el anterior sera el numerador

        // Metemos el resultado en el stack por si se necesita mas adelante
        stack.push(operation(num1, num2));
    }

    // El ultimo elemento del stack sera el resultado final
    return stack.pop()!;
};