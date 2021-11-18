// Médias 10, 6.5, 8, 7.5

const getSomaDosElementos = (notas) => {
    soma = 0;

    for (i = 0; i < notas.length; i++) {
        soma += notas[i]
    }

    return soma;
}

const getMediaDosElementos = (notas) => {
    soma = getSomaDosElementos(notas)

    return soma / notas.length
}

const notas = [10, 6.5, 8, 7.5]
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(`A nota média do array é ${getMediaDosElementos(notas)}`)
