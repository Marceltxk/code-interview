// Multiply an array of numbers using currying functions

/*
Examples: 
multiply([1, 2, 3](2)) -> [2, 4, 6]
 */


function multiply(array, num) {
    array = array.forEach(element => {
        array[element] = element * num;
    });
    return array;
}

console.log(multiply([1, 2, 3], 2));