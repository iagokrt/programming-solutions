var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var numbers = input.split('').map((n) => parseInt(n));

// https://judge.beecrowd.com/pt/problems/view/3299

var azarado = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        if (numbers[i+1] == 3) {
            azarado = true;
        }
    }
}

function esMalaSuerte(input, si) {
    if (si) {
        return console.log(`${input} es de Mala Suerte`);
    } else {
        return console.log(`${input} NO es de Mala Suerte`);
    }
}

esMalaSuerte(input, azarado);