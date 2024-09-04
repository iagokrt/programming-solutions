// Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

// Entrada
// A entrada contém um valor inteiro N (N < 10000).

// Saída
// Imprima todos valores que quando divididos por N dão resto = 2, um por linha.

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var con = 10000;

var num = parseInt(lines[0]);

for (let i = 1; i <= con; i++) {
    // console.log(i);
    if (i % num == 2) {
        console.log(i);
    }
}

