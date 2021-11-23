const cliente = {
    nome:"André",
    idade:36,
    cpf:"01234567890",
    email:"andre@gmail.com",
    saldo: 0,
    depositar: function(valor) {
        this.saldo += valor
    }
}

console.log(cliente)
console.log(`Cliente tem o saldo de R$ ${cliente.saldo}`)

console.log('Depositando R$ 100')

cliente.depositar(100)
console.log(`Cliente tem o saldo de R$ ${cliente.saldo}`)
