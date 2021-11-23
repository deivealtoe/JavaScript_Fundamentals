const notas = [10, 6.5, 8, 7.5]

const calcularMediaDoVetor = (vetor) => {
    let soma = somarValoresDoVetor(vetor)

    return soma / vetor.length
}

const somarValoresDoVetor = (vetor) => {
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    return soma
}

console.log(`A média de notas é ${calcularMediaDoVetor(notas)}`)
