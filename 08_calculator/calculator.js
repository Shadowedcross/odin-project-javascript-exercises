const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
	let sum = 0
    for (let num in nums) {
        let value = nums[num]
        sum += value
    }
    return sum
};

const multiply = function(nums) {
    let sum = 0
    for (let num in nums) {
        let value = nums[num]
        if (num == 0) {
            sum = value
        } else {
            sum *= value
        }
    }
    return sum
};

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};

const factorial = function(num) {
	if (num === 0) {
        return 1
    }
    let sum = num
    for (let i = num; i >= 1; i--) {
        if (i === num) {
            sum = i
        } else {
            sum *= i
        }
    }
    return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
