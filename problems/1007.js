var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

/**
 * https://judge.beecrowd.com/pt/problems/view/1007
 * 
    5
    6
    7
    8 
    Saida:

    DIFERENCA = -26
 */

var [a,b,c,d] = lines;
console.log(`DIFERENCA = ${(a * b) - (c * d)}`);