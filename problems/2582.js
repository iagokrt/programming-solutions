// 0 - PROXYCITY
// 1 - P.Y.N.G.
// 2 - DNSUEY!
// 3 - SERVERS
// 4 - HOST!
// 5 - CRIPTONIZE
// 6 - OFFLINE DAY
// 7 - SALT
// 8 - ANSWER!
// 9 - RAR?
// 10 - WIFI ANTENNAS


// Por exemplo, se os botões pressionados forem 3 e 4, irá tocar a música 7 - SALT
// Escreva um programa que, dados os dois botões que forem pressionados, determine qual música irá tocar.

// Entrada
// Um número inteiro C será informado, que será a quantidade de casos de teste. Cada caso tem dois valores inteiros, X e Y, representando quais botões foram pressionados.
// 3
// 3 4
// 0 0
// 1 0

// Saída
// Para cada caso de teste, imprima o nome da música correspondente.
// SALT
// PROXYCITY
// P.Y.N.G.

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var qtd = lines.shift();

var songs = {
    0 : "PROXYCITY",
    1 : "P.Y.N.G.",
    2 : "DNSUEY!",
    3 : "SERVERS",
    4 : "HOST!",
    5 : "CRIPTONIZE",
    6 : "OFFLINE DAY",
    7 : "SALT",
    8 : "ANSWER!",
    9 : "RAR?",
    10 : "WIFI ANTENNAS"
}

lines.map((n) => {
    var [n1, n2] = n.split(' ')
    // console.log(n1, n2);
    var songId = parseInt(n1) + parseInt(n2);
    // console.log(songId);
    if (songs[songId] != undefined) {
        console.log(songs[songId]);
    }
})
