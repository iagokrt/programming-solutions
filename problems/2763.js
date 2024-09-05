// O seu professor gostaria de fazer um programa com as seguintes características:

// Leia os dados de um CPF no formato XXX.YYY.ZZZ-DD;
// Imprima os quatro números, sendo um valor por linha.
// Entrada
// A entrada consiste vários arquivos de teste. Em cada arquivo de teste tem uma linha. A linha tem o seguinte formato XXX.YYY.ZZZ-DD, onde XXX, YYY, ZZZ, DD são números inteiros. Conforme mostrado no exemplo de entrada a seguir.

// 000.000.000-00

// Saída
// Para cada arquivo da entrada, terá um arquivo de saída. 
// O arquivo de saída tem quatro linhas com um número inteiro em cada uma delas, conforme foi entrado. Conforme mostra o exemplo de saída a seguir.

// 000
// 000
// 000
// 00
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n')[0];

var numbers = lines.split('.');
var code = numbers[2].split('-')

console.log(numbers[0])
console.log(numbers[1])
console.log(code[0])
console.log(code[1])

