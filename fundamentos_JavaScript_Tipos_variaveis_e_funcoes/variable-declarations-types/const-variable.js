/*
It's value can't be changed
*/

const forma = 'retângulo'
const altura = 5
const comprimento = 10
let area = 0

if (forma === 'retângulo') {
    area = altura * comprimento
} else {
    area = altura * comprimento / 2
}

console.log(`A área é ${area}`)
