// escreva greet abaixo
const greet = (name, greet = 'Hello') => (`${greet}, ${name}`);

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'