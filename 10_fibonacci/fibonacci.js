const fibonacci = function(number) {
    let parsedNumber = +number

    if (parsedNumber === 0) {
        return 0
    } else if (parsedNumber < 0) {
        return "OOPS"
    }

    let fibonacciArray = []

    for (let i = 0; i < parsedNumber; i++) {
        if (i < 2) {
            fibonacciArray.push(1)
        } else {
            fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1])
        }
    }
    return fibonacciArray[parsedNumber - 1]
};

// Do not edit below this line
module.exports = fibonacci;
