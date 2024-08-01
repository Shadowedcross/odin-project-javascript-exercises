const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let age = calculateAge(person.yearOfBirth, person.yearOfDeath)
        if (checkOldestExists(oldest)) {
            let oldestAge = calculateAge(oldest.yearOfBirth, oldest.yearOfDeath)
            if (age > oldestAge) {
                oldest = person
            }
        } else {
            oldest = person
        }
        return oldest
    }, {})
};

function calculateAge(birthYear, deathYear) {
    if (deathYear === undefined) {
        deathYear = new Date().getFullYear()
    }
    return deathYear - birthYear
}

function checkOldestExists(object) {
    return Object.keys(object).length === 0
}

// Do not edit below this line
module.exports = findTheOldest;
