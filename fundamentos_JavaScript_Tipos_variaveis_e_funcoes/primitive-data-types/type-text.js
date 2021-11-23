// Everything that is between quotes is a string/text type
const text1 = "Hello, World!"
const text2 = 'Hello, World!'
const text3 = `Hello, World!`
const text4 = `${1 + 3}`
const text5 = `12345`

const quote = 'And I said "Hello!"'

console.log(`My quote: ${quote}`)
console.log(`It's type is ${typeof(quote)}`)


// Concatenation +
const citation = 'My name is '
const myName = "Deive"

console.log('\n' + citation + myName)


// Comparing strings
console.log("belo horizonte" === 'Belo Horizonte')


// Unicode to character
const cifrao = '\u0024'
const aUppercase = '\u0041'
const checked = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aUppercase)
console.log(checked)
console.log(hiragana)
