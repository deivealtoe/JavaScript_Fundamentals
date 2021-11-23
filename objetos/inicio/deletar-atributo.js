const cliente = {
    nome:"André",
    idade:36,
    cpf:"01234567890",
    email:"andre@gmail.com"
}

console.log(cliente)

const foiDeletado = delete cliente.idade
console.log(`Foi deletado? ${foiDeletado}`)

console.log(cliente)

