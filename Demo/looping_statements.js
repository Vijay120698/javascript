// for loop
// Printing numbers from 1 to 5 using a for loop

function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

// Example usage:
printNumbers();
// Output:
// 1
// 2
// 3
// 4
// 5


// while loop 
// Calculating factorial of a number using a while loop
function factorial(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}

// Example usage:
console.log(factorial(5));  // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)



// do while

let j = 1;

do {
    console.log("The value of i is: " + j);
    j++;
} while (j <= 5);
