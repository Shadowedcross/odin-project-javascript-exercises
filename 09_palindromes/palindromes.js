const palindromes = function (string) {
    let lowerCaseString = string.toLowerCase()
    let charArray = []
    for (let char in lowerCaseString) {
        let value = lowerCaseString[char]
        if (!(value === "!" || value === " " || value === "," || value === ".")) {
            charArray.push(value)
        }
    }
    return charArray.join('') === charArray.toReversed().join('')
};

// Do not edit below this line
module.exports = palindromes;
