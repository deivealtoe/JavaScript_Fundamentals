// javaScript does a "HOISTING" with vars and functions

// Declarative way
// functions soma(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// Function expression -> It needs to be initialized
const soma = function(firstNumber, secondNumber) { return firstNumber + secondNumber }

console.log(soma(1, 2))

console.log(apresentar())
console.log(soma(1, 2))

function apresentar() {
    return 'Olá'
}

//const soma = function(firstNumber, secondNumber) { return firstNumber + secondNumber }
