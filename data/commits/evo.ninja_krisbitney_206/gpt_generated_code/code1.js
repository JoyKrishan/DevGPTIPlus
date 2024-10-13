// Check if the number is valid and non-negative
if (number < 0) {
    throw new Error("Number must be non-negative");
}

// Define the recursive helper function
function factorialHelper(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorialHelper(n - 1);
}

// Call the helper function with the provided number
return factorialHelper(number);