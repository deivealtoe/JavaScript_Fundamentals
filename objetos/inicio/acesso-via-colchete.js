const cliente = {
    nome:"André",
    idade:36,
    cpf:"01234567890",
    email:"andre@gmail.com"
}

const chaves = ['nome', 'idade', 'cpf', 'email']

chaves.forEach(chave => console.log(cliente[chave]))

console.log(cliente["catapimbas"])
