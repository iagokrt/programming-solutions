// Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002. 

// Entrada
// A entrada é composta por vários casos de testes contendo valores inteiros.

// 2200
// 1020
// 2022
// 2002

// Saída
// Para cada valor lido mostre a mensagem correspondente à descrição do problema.

// Senha Invalida
// Senha Invalida
// Senha Invalida
// Acesso Permitido
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var result = lines.map((n) => {
    return parseInt(n)
})

for (let n of result) {
    if (n === 2002) {
        console.log('Acesso Permitido');
        break; // Interrompe o loop
    } else {
        console.log('Senha Invalida');
    }
}
