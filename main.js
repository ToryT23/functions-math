// You need to write two functions.
// A function to add two values together. This function needs to define two parameters - 
// the two numbers that you want to add together.
// A function to multiply a single number by 2. This function takes one parameter -
//  the number you want to multiply by 2.
// In the adding function, add the values of the two parameters and return the result
// In the multiplication function, multiply the value of the single parameter by 2 and return the result.

const addNumber = (num1, num2) => {
    const add = num1 + num2
    return add
}

const multiplyBy2 = (number) => {
    const double = number * 2
    return double
}

const addition = addNumber(10, 5)
const multiplication = multiplyBy2(1000)

console.log(addition)
console.log(multiplication)