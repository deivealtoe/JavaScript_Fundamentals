const notas = [10, 6.5, 8, 7.5]

const calcularMediaDoVetor = (vetor) => {
    const media = somarValoresDoVetor(vetor) / vetor.length

    return media
}

const somarValoresDoVetor = (vetor) => {
    let soma = 0;

    vetor.forEach((valor/*, indice*/) => {
        soma += valor
    });

    return soma
}

console.log(`A média das notas do vetor é ${calcularMediaDoVetor(notas)}`)
