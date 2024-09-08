// Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

// se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
// se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
// se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
// se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
// se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
// se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
// Entrada
// A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).
// 7.0 5.0 7.0


// Saída
// Imprima todas as classificações do triângulo especificado na entrada.
// TRIANGULO ACUTANGULO
// TRIANGULO ISOSCELES

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lados = input.split(' ').map((n) => parseFloat(n));

lados.sort((a, b) => b - a);

var a = lados[0];
var b = lados[1];
var c = lados[2];

// console.log({'lados': a, b, c});

var triangulos = {
    existir: (a, b, c) => a < b + c,
    angulos: {
        retangulo: (a,b,c) => (a**2 == b**2 + c**2),
        obtusangulo: (a,b,c) => (a**2 > b**2 + c**2),
        acutangulo: (a,b,c) => (a**2 < b**2 + c**2)
    },
    lados: {
        equilatero: (a,b,c) => (a == b && b == c),
        isosceles: (a,b,c) => (a == b || b == c || c == a)
    }
}

function triangular(a,b,c) {
    if (triangulos.existir(a,b,c)) {
        // categorizar triangulos por lados
        if (triangulos.angulos.retangulo(a,b,c)) {
            console.log("TRIANGULO RETANGULO")
        }

        if (triangulos.angulos.obtusangulo(a,b,c)) {
            console.log("TRIANGULO OBTUSANGULO")
        }

        if (triangulos.angulos.acutangulo(a,b,c)) {
            console.log("TRIANGULO ACUTANGULO")
        }

        // categorizar triangulos por angulos
        if (triangulos.lados.equilatero(a,b,c)) {
            // TODO EQUILATERO É ISÓSCELES
            // retorne imediatamente nesse caso para não exibir também a categoria de isósceles
            return console.log("TRIANGULO EQUILATERO");
        }
        if (triangulos.lados.isosceles(a,b,c)) {
            console.log("TRIANGULO ISOSCELES")
        }

    } else {
        console.log('NAO FORMA TRIANGULO')
    }
}

triangular(a,b,c)

// solução simplificada

// não formar triangulo
// if (a >= b+c) {
//     return console.log("NAO FORMA TRIANGULO")
// }

// // RETANGULO
// if (a**2 == b**2 + c**2) {
//     console.log("TRIANGULO RETANGULO")
// }

// // OBTUSANGULO
// if (a**2 > b**2 + c**2) {
//     console.log("TRIANGULO OBTUSANGULO")
// }

// // ACUTANGULO 
// if (a**2 < b**2 + c**2) {
//     console.log("TRIANGULO ACUTANGULO")
// }

// // EQUILATERO 
// if (a == b && b == c) {
//       // TODO EQUILATERO É ISÓSCELES
//             // retorne imediatamente nesse caso para não exibir também a categoria de isósceles
//     return console.log("TRIANGULO EQUILATERO")
// }

// // ISOSCELES
// if (a == b || b == c || c == a) {
//     console.log("TRIANGULO ISOSCELES")
// }
