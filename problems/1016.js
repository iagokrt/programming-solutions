// Dois carros (X e Y) partem em uma mesma direção. 
// O carro X sai com velocidade constante de 60 Km/h 
// e o carro Y sai com velocidade constante de 90 Km/h.

// Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, 
// ou seja, consegue se afastar um quilômetro a cada 2 minutos.

// Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

// Entrada
// O arquivo de entrada contém um número inteiro.
// 30

// Saída
// Imprima o tempo necessário seguido da mensagem "minutos".
	
// 60 minutos

var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var distance = input.split('\n').map((n)=> parseInt(n));

var km = distance[0];

var velocityX = 60; // 60km/h
var velocityY = 90; // 90km/h
var dif = velocityY - velocityX;
// quanto tempo leva para o carro mais devagar alcançar o carro mais rápido?
// a distância é o parâmetro

function calculate(km) {
    var time = (km / dif) * 60;
    return time;
}

var delay = calculate(km);

// console.log(km)
console.log(`${delay} minutos`);
