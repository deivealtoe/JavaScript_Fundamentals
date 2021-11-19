const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]
// let listaDeNotasEAlunos = [['João', 'Juliana', 'Caio', 'Ana'], [10, 7, 9, 6]]

console.table(listaDeNotasEAlunos)

//console.log(`${listaDeNotasEAlunos[0][0]} sua média é ${listaDeNotasEAlunos[1][0]}`)

for (let i = 0; i < listaDeNotasEAlunos[0].length; i++) {
    console.log(`${listaDeNotasEAlunos[0][i]} sua nota é ${listaDeNotasEAlunos[1][i]}`)
}
