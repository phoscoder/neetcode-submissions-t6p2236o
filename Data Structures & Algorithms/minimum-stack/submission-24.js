class MinStack {
    stack 
    min
    constructor(

    ) {
        this.stack = []
    }

    push(val) {
        this.stack.push(val)
    }

    pop() {
        return  this.stack.pop()
    }

    top() {
        return this.stack[this.stack.length -1]
    }

    getMin() {
        let min = this.stack[0]; this.stack.forEach(i => { i < min ? min = i: null})
        return min
    }
}
