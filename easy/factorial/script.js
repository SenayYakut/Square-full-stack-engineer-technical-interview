// Write a solution for a factorial function in recursive and iterative concept
// solution 1 in recursive 

const recursiveFactorial = (n) => {
    if (n === 0) {
        return 1;
    } else if (n >= 1) {
        return n * recursiveFactorial(n - 1)
    }
}
const recursive = recursiveFactorial(5)
console.log(recursive) //returns 120

//Solutin 2 in iterative 

const iterativeFactorial = (n) => {
    result = 1;
    while (n > 0) {
        result *= n;
        n -= 1;
    }
    return result;
}
const iterative = iterativeFactorial(5);
console.log(iterative) //returns 120