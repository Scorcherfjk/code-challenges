/*
 * OBJETIVO: Implementar una pila que retorne el elemento mínimo en O(1)
 * ALGORITMO: Stack auxiliar que mantiene solo los valores mínimos vistos
 */
export class MinStack {

    stack: number[];
    minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        };
    }

    pop(): void {
        const pop = this.stack.pop();
        if (pop === this.getMin()) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

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