/*
let - It came to javaScript in ES6 (2015)
It's scope is local (by block of code)
*/

let forma = 'retângulo'
let altura = 5
let comprimento = 10
let area = 0

if (forma === 'retângulo') {
    area = altura * comprimento
} else {
    area = altura * comprimento / 2
}

console.log(`A área é igual a ${area}`)
