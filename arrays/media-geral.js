const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaGeral(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador, 0)

    return somaDasNotas / notasDaSala.length
}

console.log(`Média da sala de javaScript ${mediaGeral(salaJs)}`)
console.log(`Média da sala de Java ${mediaGeral(salaJava)}`)
console.log(`Média da sala de Python ${mediaGeral(salaPython)}`)
