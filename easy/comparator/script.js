/*create a comparator function in JavaScript.*/

//Ascending order 
const ascendingOrder = (a, b) => {
        return a - b;
    }
    // Desending order
const ascendingOrder = (a, b) => {
    return b - a;
}
const testArray = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
testArray.sort(ascendingOrder);
console.log(testArray);