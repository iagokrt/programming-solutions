// Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente.

// Entrada
// A entrada contém vários casos de teste. Cada caso contém dois valores inteiros X e Y. A leitura deve ser encerrada ao ser fornecido valores iguais para X e Y.

// 5 4
// 7 2
// 3 8
// 2 2

// Saída
// Para cada caso de teste imprima “Crescente”, caso os valores tenham sido digitados na ordem crescente, caso contrário imprima a mensagem “Decrescente”.
// Decrescente
// Decrescente
// Crescente
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

lines.map(function(line) {
    var arrDupla = line.split(' ').map((n) => parseInt(n));
    // console.log(arrDupla);
    if (arrDupla[0] > arrDupla[1]) {
        console.log('Decrescente');
    } else if (arrDupla[0] < arrDupla[1]) {
        console.log('Crescente');
    }
})
