// Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

// Entrada
// A entrada contem três números inteiros.
// 7 21 -14

// Saída
// Imprima a saída conforme foi especificado.
// -14
// 7
// 21

// 7
// 21
// -14
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split(' ').map((n) => parseInt(n));

var original = [];

lines.forEach((n) => {
    original.push(n); // cria uma cópia do array original inalterado
}); 

lines.sort((a, b) => a - b); // ordem crescente

lines.forEach((n) => {
    console.log(n); // exibe em ordem crescente
})

console.log('');// espaço 

original.forEach((n) => {
    console.log(n); // exibe o array original
})
