/*The Sieve of Eratosthenes is one of the oldest-known algorithms, and it’s still helpful for deriving prime numbers! The algorithm is attributed to Eratosthenes, a Greek mathemetician born in the third century BCE.

 */

const sieveOfEratosthenes = (limit) => {
    // Handle edge cases
    if (limit <= 1) {
        return [];
    }
    // Create the output
    const output = new Array(limit + 1).fill(true);
    // Mark 0 and 1 as non-prime
    output[0] = false;
    output[1] = false;

    // Iterate up to the square root of the limit
    for (let i = 2; i < Math.pow(limit, 0.5); i++) {
        if (output[i] === true) {
            // Mark all multiples of i as non-prime
            for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
                output[j] = false;
            }
        }
    }

    // Remove non-prime numbers
    return output.reduce((primes, current, index) => {
        if (current) {
            primes.push(index);
        }
        return primes
    }, []);
}

//Solution 2

const sieveOfEratosthenes = (limit) => {
    if (limit <= 1) {
        return [];
    }
    // Create the output
    const output = new Array(limit + 1).fill(true);
    // Mark 0 and 1 as non-prime
    output[0] = false;
    output[1] = false;

    // Iterate up to the square root of the limit
    for (let i = 2; i <= limit; i++) {
        if (output[i] === true) {
            // Mark all multiples of i as non-prime
            for (let j = i * 2; j <= limit; j = j + i) {
                output[j] = false;
            }
        }
    }
    // option 1:replace true values with the corresponding number value and filter out non-primes
    return output.reduce((primes, current, index) => {
        if (current) {
            primes.push(index);
        }
        return primes
    }, []);
}

const test = sieveOfEratosthenes(13);
// should return [2, 3, 5, 7, 11, 13]
console.log(test);

// Leave this line for testing