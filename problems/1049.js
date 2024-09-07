// 1049
// Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita. 
//  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

const { findSourceMap } = require('module');



// Entrada
// A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.


// São 8 palavras ao total.
// Se fossem mais?
// Divididos em oito grupos 


// Saída
// Imprima o nome do animal correspondente à entrada fornecida.
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

// console.log(lines);

var key1 = lines[0];
var key2 = lines[1];
var key3 = lines[2];

// Dicionário de animais, organizado conforme a árvore de decisão
const animais = {
    "vertebrado": {
        "ave": {
            "carnivoro": "aguia",
            "onivoro": "pomba"
        },
        "mamifero": {
            "onivoro": "homem",
            "herbivoro": "vaca"
        }
    },
    "invertebrado": {
        "inseto": {
            "hematofago": "pulga",
            "herbivoro": "lagarta"
        },
        "anelideo": {
            "hematofago": "sanguessuga",
            "onivoro": "minhoca"
        }
    }
};

// abstract function
function navigate(dict, keys) {
    // let node = dict; // - start from top
    let node = dict;

    // avança para o próximo nível (nó)
    for(const key of keys) {
        if (node[key]) {
            node = node[key];
        } else {
            return "not found"
        }
    }

    return node

}

function result(node1, node2, node3) {
    return navigate(animais, [node1, node2, node3]);
}

const resultado = result(key1, key2, key3);

console.log(resultado);





