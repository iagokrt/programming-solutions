// Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

// Entrada
// O arquivo de entrada contém 5 valores inteiros quaisquer.
// 7
// -5
// 6
// -4
// 12

// Saída
// Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
// 3 valores pares

var input = require('fs').readFileSync('./dev/stdin', 'utf8');

var even = 0;

input.split('\n').map((n) => {
    var value = parseInt(n);
    
    if (value % 2 == 0) {
        even = even + 1
    }
});

var response = `${even} valores pares`

console.log(response);