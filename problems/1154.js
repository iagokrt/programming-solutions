// Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. 
// O último dado, que não entrará nos cálculos, contém o valor de idade negativa. Calcular e imprimir a idade média deste grupo de indivíduos.

// Entrada
// A entrada contém um número indeterminado de inteiros. A entrada será encerrada quando um valor negativo for lido.
// 34
// 56
// 44
// 23
// -2

// Saída
// A saída contém um valor correspondente à média de idade dos indivíduos.
// 39.25

// A média deve ser impressa com dois dígitos após o ponto decimal.

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var qtd = 0;
var sum = 0;

lines.map((n) => {
    if (n > 0) {
        sum = sum + parseInt(n);
        qtd = qtd + 1;
    }
})
console.log((sum/qtd).toFixed(2));


