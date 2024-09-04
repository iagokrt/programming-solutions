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

var qtdPositivos = 0;
var somaPositivos = 0;
var resultado = 0;
// Percorrer o array, identificando números positivos 
lines.map((num) => {
    if (num > 0) {
        // é positivo. Adicione à varíavel contador de nmrs positivos
        qtdPositivos = qtdPositivos + 1;
        // é positivo. Adicione à soma total de números positivos
        somaPositivos = parseFloat(num) + parseFloat(somaPositivos);
    }

});
resultado = (somaPositivos/qtdPositivos).toFixed(1);

console.log(qtdPositivos + ' valores positivos');
console.log(resultado);
