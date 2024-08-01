const sumAll = function(num1, num2) {
    if (!checkIfValidNumbers(num1, num2)) {
        return "ERROR"
    }

    let sum = 0
    let minNum = Math.min(num1, num2)
    let maxNum = Math.max(num1, num2)

    for (let i = minNum; i <= maxNum; i++) {
        sum += i
    }
    return sum
};

function checkIfValidNumbers(...nums) {
    for (let num in nums) {
        let value = nums[num]
        if (!Number.isInteger(value) || (Math.floor(value) !== value) || value < 0) {
            return false
        }
    }
    return true
}

// Do not edit below this line
module.exports = sumAll;
