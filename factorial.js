// Iterative factorial function example

// O(n)
const factorial = number => {
    let product = 1;
    for (let i = 2; i <= number; i++) {
        product *= i;
    }
    return product;
}

// Recursive factorial function example

const factorial2 = number => {
    return number < 2 ? 1 : number * factorial(number - 1);
}