// Implicit conversion
const numero = 456
const numeroTexto = '456'

console.log(numero == numeroTexto)
console.log(numero === numeroTexto)

console.log(numero + numeroTexto)


// Explicit conversion
// Number()
// String()
console.log(numero + Number(numeroTexto))

console.log('\n' + Number("123a"))
