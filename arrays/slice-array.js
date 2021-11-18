const sala = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Alice', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala01 = sala.slice(0, sala.length / 2)
const sala02 = sala.slice(sala.length / 2)

console.table(sala01)
console.table(sala02)
