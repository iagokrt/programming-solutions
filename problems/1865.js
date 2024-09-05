
// Um dia, Thor desafiou seus amigos para ver quem conseguia levantar o Mjölnir.
// Escreva um programa que, dado um nome, e a força, em Newtons, aplicado ao tentar levantar o Mjölnir, informar se a pessoa conseguiu ou não levantá-lo.

// Entrada
// Um número inteiro C será informado, que será a quantidade de casos de teste. Cada caso de teste inicia com uma palavra, que é o primeiro nome de quem está tentando levantar o Mjölnir, e um inteiro N (1 ≤ N ≤ 25000), indicando a força aplicada para cima, em Newtons, ao puxar o martelo, de modo a tentar levantá-lo.

// 4
// Hulk 5000
// Tony 1000
// Thor 50
// Steve 500

// Saída
// Para cada caso de teste imprima um caractere ‘Y’, caso a pessoa tenha conseguido levantar , ou ‘N’, caso não tenha conseguido.
// N
// N
// Y
// N

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var qtd = lines.shift();

for ( let i = 0; i < qtd; i++) {
    var test = lines[i].split(' ');
    if (test[0] == 'Thor') {
        console.log('Y');
    } else if (test[0] !== 'Thor') {
        console.log('N');
    }
}
