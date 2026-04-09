class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       let stack = []
       let map = {
           ')': '(',
           '}': '{',
           ']': '['
       }

       for (let char of s) {
           if (char === '(' || char === '{' || char === '[') {
               stack.push(char)
           } else {
               let last = stack.pop()
               if (last !== map[char]) return false
           }
       }

       return stack.length === 0
    }
}