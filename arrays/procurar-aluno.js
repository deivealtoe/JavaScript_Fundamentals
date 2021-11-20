const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10, 7, 9, 6]

const listaDeNotasEAlunos = [alunos, mediasDosAlunos]
// let listaDeNotasEAlunos = [['João', 'Juliana', 'Caio', 'Ana'], [10, 7, 9, 6]]

const buscarMediaDoAluno = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        const indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        
        return `${listaDeNotasEAlunos[0][indice]} sua média é ${listaDeNotasEAlunos[1][indice]}`
    } else {
        return `Aluno(a) '${nomeDoAluno}' não está cadastrado`
    }
}

console.table(buscarMediaDoAluno('João'))
console.table(buscarMediaDoAluno('Maria'))
