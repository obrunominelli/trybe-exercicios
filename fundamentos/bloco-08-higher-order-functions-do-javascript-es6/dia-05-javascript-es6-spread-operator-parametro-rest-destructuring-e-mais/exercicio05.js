const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([first, second, third]) => [third, second, first];
console.log(`Lista Padrão: ${myList.join(', ')}\n Lista Trocada: ${swap(myList).join(', ')}`);
