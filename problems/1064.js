// Entrada
// A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.
// Exemplo Entrada:
// 7
// -5
// 6
// -3.4
// 4.6
// 12


// Saída
// O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.
// Exemplo Saída:
// 4 valores positivos
// 7.4
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

console.log(lines);