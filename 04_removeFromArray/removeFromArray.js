const removeFromArray = function(array, ...elements) {
            for (let element in elements) {
        let removedAllElements = false
        while (!removedAllElements) {
            if (array.includes(elements[element])) {
                let elementIndex = array.indexOf(elements[element])
                array.splice(elementIndex, 1)
            } else {
                removedAllElements = true
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
