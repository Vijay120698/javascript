// if statements

function isLeapYear(year) 
{
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year`);
   
}}

isLeapYear(2020);  // Output: 2020 is a leap year
isLeapYear(2023);  // Output: nothing




//if else statements

function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(findMax(10, 5));   // Output: 10
console.log(findMax(-3, -8));  // Output: -3
console.log(findMax(7, 7));    // Output: 7 (equal numbers case)



// else if ladder statements

function triangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        console.log("Equilateral triangle");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log("Isosceles triangle");
    } else {
        console.log("Scalene triangle");
    }
}


triangleType(5, 5, 5);   // Output: Equilateral triangle
triangleType(4, 4, 6);   // Output: Isosceles triangle
triangleType(3, 4, 5);   // Output: Scalene triangle



