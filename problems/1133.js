var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

/**
 * https://judge.beecrowd.com/pt/problems/view/1133
 * 
 * 10
 * 18 
 */

// var startValue = (lines[0] > lines[1]) ? lines[1] : lines[0]; // não necessariamente em ordem crescente.
// var endValue = (lines[0] < lines[1]) ? lines[1] : lines[0];

var [start, end] = lines; // destruct

if (start > end) {
    [start, end] = [end, start]; // não necessariamente em ordem crescente.
}

start += 1;

for (let i = start; i < end; i++) {

    if (i % 5 == 2 || i % 5 == 3) {
        console.log(i);
    }

}