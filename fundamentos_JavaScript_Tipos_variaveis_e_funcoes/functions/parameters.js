// Parameters
function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

console.log(`The sum is ${sum()}`)


// Default values
function subtract(firstNumber = 0, secondNumber = 0) {
    return firstNumber - secondNumber
}

console.log(`The subctraction is ${subtract()}`)
console.log(`The subctraction is ${subtract(2, 1)}`)
console.log(`The subctraction is ${subtract(2)}`)
console.log(`The subctraction is ${subtract(null, 1)}`)
console.log(`The subctraction is ${subtract(1, null)}`)


//
function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade("a", 1))
console.log(nomeIdade(1, "a"))

const teste = () => {

}