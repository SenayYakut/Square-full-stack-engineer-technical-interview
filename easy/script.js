/*Write a
function which prints every number from 0 up to the given input.If divisible by 3, print "Fizz"
instead of the number.If divisible by 5, print "Buzz".If input is divisible by 3 AND 5, print "FizzBuzz".*/

function zeroToGiven(num) {
    let list = "0,";
    if (num === 0) {
        return list;
    } else {
        for (let i = 1; i < num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                list += "FizzBuzz,"
            } else if (i % 3 === 0) {
                list += "Fizz,";
            } else if (i % 5 === 0) {
                list += "Buzz,";
            } else {
                list += i + ",";
            }
        }
    }
    return list
}

console.log(zeroToGiven(16))
console.log(zeroToGiven(1))
console.log(zeroToGiven(6))