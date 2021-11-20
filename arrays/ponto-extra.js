const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map((nota) => {
    novaNota = (nota >= 10) ? 10 : nota + 1

    return novaNota
})

console.table(notasAtualizadas)
