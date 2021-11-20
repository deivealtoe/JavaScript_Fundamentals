const nomes = ['Ana', 'Ju', 'Leo', 'Paula']

function imprimeNomes(nome) {
    console.log(nome)
}

nomes.forEach(elemento => imprimeNomes(elemento))

console.log()

nomes.forEach(imprimeNomes)