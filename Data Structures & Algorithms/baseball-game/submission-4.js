class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let ops = []

        let total = 0

        for (const op of operations){
            if (op == 'D')ops.push(parseFloat(ops[ops.length - 1] * 2))
            else if (op == '+') ops.push(parseFloat(ops[ops.length - 1]) + parseFloat(ops[ops.length - 2]))
            else if (op == 'C') ops.pop()
            else ops.push(parseFloat(op))
            total = ops.reduce((ps, a) => parseInt(ps) + a, 0)
        }

        return total
    }


}
