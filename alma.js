// 1. feladat Sum of array singles
const sumOfArraySingles = arr => {
    let singles = arr.filter((num, index) => arr.indexOf(num) === arr.lastIndexOf(num));
    return singles.reduce((acc, curr) => acc + curr, 0);
}


console.log('1. feladat\n')
console.log(sumOfArraySingles([4, 5, 7, 5, 4, 8]), 15)
console.log(sumOfArraySingles([9, 10, 19, 13, 19, 13]), 19)
console.log(sumOfArraySingles([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(sumOfArraySingles([5, 17, 18, 11, 13, 18, 11, 13]), 22)
console.log(sumOfArraySingles([5, 10, 19, 13, 10, 13]), 24)


// 2. feladat Sort Arrays (Ignoring Case)
const sortArraysIgnoringCase = arr => {
    return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

console.log('\n2. feladat\n')
console.log(sortArraysIgnoringCase(["Hello", "there", "I'm", "fine"]), ["fine", "Hello", "I'm", "there"])
console.log(sortArraysIgnoringCase(["C", "d", "a", "B"]), ["a", "B", "C", "d"])
console.log(sortArraysIgnoringCase(["CodeWars"]), ["CodeWars"])
console.log(sortArraysIgnoringCase([]), [])


// 3. feladat Insert dashes
const insertDash = num => {
    let numString = num.toString();
    let eredm = numString[0];
    for (let i = 1; i < numString.length; i++) {
        if (parseInt(numString[i - 1]) % 2 !== 0 && parseInt(numString[i]) % 2 !== 0) {
            eredm += '-' + numString[i];
        } else {
        eredm += numString[i];
        }
    }
    return eredm;
}

console.log('\n3. feladat\n')
console.log(insertDash(454793), '4547-9-3')
console.log(insertDash(123456), '123456')
console.log(insertDash(1003567), '1003-567')
console.log(insertDash(13570), '1-3-5-70')
console.log(insertDash(0), '0')