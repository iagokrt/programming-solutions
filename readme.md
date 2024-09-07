# Problemas em JavaScript
Este repositório contém várias soluções para problemas de programação em JavaScript. Cada arquivo de problema segue uma estrutura padrão para receber inputs e processá-los.

## Estrutura
- Pasta ``dev/``: Contém os arquivos de entrada (``stdin``).

- Arquivos ``.js``: Cada arquivo JavaScript lê os dados de entrada da pasta ``dev`` e os processa de acordo com o problema específico.
## Exemplo de Estrutura de Arquivo

```
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

// Lógica para processar os inputs
```
## Como Executar
Para rodar qualquer arquivo (exemplo):

```
node 2582.js
```

Substitua ``nome_do_arquivo.js`` pelo arquivo específico que deseja executar.

---

