class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let ops = []

        for (const op of operations){
            if (op == 'D')ops.push(parseFloat(ops[ops.length - 1] * 2))
            else if (op == '+') ops.push(parseFloat(ops[ops.length - 1]) + parseFloat(ops[ops.length - 2]))
            else if (op == 'C') ops.pop()
            else ops.push(parseFloat(op))
        }

        return ops.reduce((ps, a) => parseInt(ps) + a, 0)
    }


}
