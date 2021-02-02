/*Create a memoized fibonacci() function. This function should return the nth Fibonacci number.

Note: To avoid an infinite loop, either handle the edge case of negative numbers in your function, or don’t call it using negative numbers.*/

const memo = {};

const fibonacci = (num) => {
    let returnValue;
    if (memo[num]) {
        returnValue = memo[num];
    } else if (num === 0 || num === 1) {
        returnValue = num;
    } else {
        returnValue = fibonacci(num - 2) + fibonacci(num - 1);
        memo[num] = returnValue;
    }

    return returnValue;
}