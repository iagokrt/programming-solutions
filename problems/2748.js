var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

/**
 * https://judge.beecrowd.com/pt/problems/view/2748
 * 

    Saida:

   ---------------------------------------
   |        Roberto                      |
   |                                     |
   |        5786                         |
   |                                     |
   |        UNIFEI                       |
   --------------------------------------- 
 */

var [a,b,c,d] = lines;
console.log(`DIFERENCA = ${(a * b) - (c * d)}`);