// Dada uma letra do alfabeto, informe qual a sua posição.

// Entrada
// Um único caracter L, uma letra maiúscula ('A'-'Z') do alfabeto.

// Saída
// Um único inteiro, que representa a posição da letra no alfabeto.
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n')[0];

// var alf = ['', 'A', 'B', 'C', 'D', 'E', 'F', 
// 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// for (let n of alf) {
//     if (n == lines) {
//         console.log(alf.indexOf(n))
//     }
// }

var maps = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8,
    'I': 9,
    'J': 10,
    'K': 11,
    'L': 12,
    'M': 13,
    'N': 14,
    'O': 15,
    'P': 16,
    'Q': 17,
    'R': 18,
    'S': 19,
    'T': 20,
    'U': 21,
    'V': 22,
    'W': 23,
    'X': 24,
    'Y': 25,
    'Z': 26
};

console.log(maps[lines]);
