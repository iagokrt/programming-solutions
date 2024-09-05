// Toorg é o integrante mais sábio do grupo de heróis denominado Os Protetores da Via Láctea. 
// Para qualquer pergunta, ele tem a resposta ideal! Escreva um programa que, dada uma pergunta, informe a resposta de Toorg.

// Entrada
// A entrada terá diversos casos de teste. A cada caso de teste, um número N é apresentado, que representa o número de casos de teste. Em seguida, haverá N linhas, com as perguntas feitas para Toorg.
// 3
// Who are you?
// How old are you?
// What can I do for you?


// Saída
// Para cada caso de teste, imprima a resposta de Toorg.
// I am Toorg!
// I am Toorg!
// I am Toorg!
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');
// console.log(lines)

var qtd = lines.shift();

for (let i = 0; i < qtd; i++) {
    var answer = 'I am Toorg!'
    console.log(answer);
}