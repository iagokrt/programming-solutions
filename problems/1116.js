// Escreva um algoritmo que leia 2 números e imprima o resultado da divisão do primeiro pelo segundo. 
// Caso não for possível mostre a mensagem “divisao impossivel” para os valores em questão.

// Entrada
// A entrada contém um número inteiro N. Este N será a quantidade de pares de valores inteiros (X e Y) que serão lidos em seguida.

// 3
// 3 -2
// -8 0
// 0 8

// Saída
// Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, ou “divisao impossivel” caso não seja possível efetuar o cálculo.
// -1.5
// divisao impossivel
// 0.0
// Obs.: Cuide que a divisão entre dois inteiros em algumas linguagens como o C e C++ gera outro inteiro. Utilize cast :)
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var qtd = parseInt(lines.shift());

for ( let i = 0; i < qtd; i++) {
    var par = lines[i];
    var arrPar = par.split(' ');
    arrPar = arrPar.map((n) => {return parseInt(n)})

    var num1 = arrPar[0];
    var num2 = arrPar[1];

    if (num2 == 0) {
        console.log('divisao impossivel');
    } else {
        console.log((num1/num2).toFixed(1));
    }
}
