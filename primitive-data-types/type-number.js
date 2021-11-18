// Type number
const myNumber = 3

const firstNumber = 3
const secondNumber = 2

const mathOperation = firstNumber * secondNumber

console.log(`My number is ${mathOperation}`)
console.log(`It's type is '${typeof(mathOperation)}'`)


// Float numbers
const floatNumber = 2.3
const anotherFloatNumber = .5

const anotherMathOperation = floatNumber + anotherFloatNumber

console.log(`\nMy number is ${anotherMathOperation}`)
console.log(`It's type is '${typeof(anotherMathOperation)}'`)


// Intinity
const zero = 0
const newNumber = firstNumber / zero

console.log(`\n${firstNumber} divided / by ${zero} = ${newNumber}`)


// NaN -> Not a Number -> Well... It is not a number :)
const alura = "Alura"
const notANumber = alura * firstNumber

console.log(`\nNot a Number: ${notANumber}`)
