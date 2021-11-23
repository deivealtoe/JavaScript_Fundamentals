const cliente = {
    nome:"André",
    idade:36,
    cpf:"01234567890",
    email:"andre@gmail.com",
    telefones: ['123', '321', '456', '654', '789', '987']
}

console.log(cliente.telefones)

for (let telefone in cliente.telefones) {
    console.log(telefone)
}
