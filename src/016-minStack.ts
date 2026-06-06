/*
 * OUTPUT: Implementar una pila que retorne el elemento mínimo en O(1)
 * ALGORITMO: Stack auxiliar que mantiene solo los valores mínimos vistos
 * SKILL: Stack
 */
export class MinStack {

    // Un Stack es basicamente una lista LIFO
    stack: number[];

    // Tenemos un stack alterno para los minimos vistos
    minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    // Insertamos y si el valor es menor al minimo,
    // lo metemos en la pila alterna. Usamos <= porque pueden haber numeros repetidos. 
    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        };
    }

    // Sacamos, y si el valor es el minimo,
    // tambien lo sacamos de la pila alterna
    pop(): void {
        const pop = this.stack.pop();
        if (pop === this.getMin()) {
            this.minStack.pop();
        }
    }

    // El ultimo, no hay mucha vuelta
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    // el ultimo de la pila alterna
    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */