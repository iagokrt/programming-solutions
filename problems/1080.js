var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n'); // array de strings

var result = []; // array de numeros

var maiorAtual = 0;
var posicao = 0;

lines.map(function(n) {
    result.push(parseInt(n))
})

for (let i = 1; i < result.length; i++) {
    var temp = result[i];
    if (temp > maiorAtual) {
        maiorAtual = temp;
        posicao = i+1;
    }
}

console.log(maiorAtual);
console.log(posicao);
