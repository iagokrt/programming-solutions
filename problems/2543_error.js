// Por ser bastante habilidoso, os vídeos de suas jogadas (seus famosos gameplays) vivem aparecendo na Jogatina UFPR, 
// uma página na internet que publica gameplays de alunos da universidade.

const { parse } = require('path');

// A página publica muitos vídeos diariamente. Por isso, pode ser dificil encontrar e contar todos os seus vídeos na página. Entretanto, como você também é programador, você decidiu escrever um programa para auxiliá-lo nesta tarefa. Dada a lista de gameplays publicados na página, determine quantos gameplays seus de Contra-Strike foram publicados.

// Entrada
// A entrada contém vários casos de teste. A primeira linha de cada caso contém dois inteiros N e I (1 ≤ N ≤ 104, 1000 ≤ I ≤ 9999), o número de gameplays publicados na página e o seu identificador na universidade, respectivamente.
// As próximas N linhas descrevem os gameplays publicados. Cada gameplay é descrito por dois inteiros i e j (1000 ≤ i ≤ 9999, j=0 ou 1), onde i é o identificador na universidade do autor do gameplay, e j=0 se o gameplay é de Contra-Strike, ou j=1 se é de Liga of Legendas.
// 7 5558
// 5693 1
// 5558 0
// 6009 1
// 5558 1
// 1566 0
// 5558 0
// 8757 1


// A entrada termina com fim-de-arquivo (EOF).

// Saída
// Para cada caso de teste, imprima uma única linha com um número indicando quantos gameplays seus de Contra-Strike foram publicados na página.
// 2
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var firstLine = lines.shift();
var result = 0;

var [qtdGameplays, playerId] = firstLine.split(' ');
playerId = parseInt(playerId);

for ( let i = 0; i < qtdGameplays; i++) {
    
    console.log(lines[i]);

    var [id, game] = lines[i].split(' ');
 
    // id = parseInt(id);
    // game = parseInt(game); // 0=CS | 1=LOL
    if (id == playerId && game == 0) {
        result = result + 1
    }
}
console.log(result);
