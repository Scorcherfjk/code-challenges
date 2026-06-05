// RPN = Reversed Polish Notation
export function evalRPN(tokens: string[]): number {

    const stack : number[] = [];
    const operations: Record<string, (a: number, b: number) => number>= {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => Math.trunc(a / b),
    };
    for (let i = 0; i < tokens.length; i++) {
        const value = tokens[i];
        
        if (!Object.hasOwn(operations, value)) {
            stack.push(Number(value));
            continue;
        }

        const operation = operations[value];
        const num2 = stack.pop()!;
        const num1 = stack.pop()!;

        stack.push(operation(num1, num2));
    }

    return stack.pop()!;
};