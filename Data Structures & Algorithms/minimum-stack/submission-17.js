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
        let min = this.stack[0]

        for (let i = 0; i <= this.stack.length; i++){
            if (this.stack[i] < min){
                min = this.stack[i]
            }
        }
        return min
    }
}
