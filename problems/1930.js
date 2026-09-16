var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var line = input.split(' ').map((n) => parseInt(n));

var qtdAparelhos = 0;

for (let i = 0; i < line.length; i++) {
    (i == 0) ? qtdAparelhos += (line[i]) : qtdAparelhos += (line[i] - 1) 
}
// console.log(qtdAparelhos);

// var total = line.reduce((acc, t) => acc + t, 0) - line.length + 1; 
// console.log(total);
var [t1, t2, t3, t4] = line;
console.log(t1 + t2 + t3 + t4 - 3);

/**
 * https://judge.beecrowd.com/pt/problems/view/1930
 * Entrada
 * 2 4 3 2
 * Saida
 * 8
 * ---
 * Entrada 
 * 6 6 6 6
 * Saida
 * 21
 * ---
 * Entrada
 * 2 2 2 2
 * Saida
 * 5 
 */

// console.log(line);

