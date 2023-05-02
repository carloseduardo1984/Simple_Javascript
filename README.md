# mod3w2
mod3w2

PROJETO PARA CRIAÇÃO DE ARQUIVOS JAVASCRIPT COM HTML INCORPORADO, EXTERNO, OU JAVASCRIPT PURO COM NODE.

SEQUENCIA:

1- INSTALE O NODEJS > https://nodejs.org/en

2- CRIE UMA PASTA E ABRA NO VSCODE

3 - ABRA O TERMINAL E APLIQUE O COMANDO PARA INICIAR O PROJETO COM NODE > `npm init`

4 - Crie uma pasta de arquivos fonte chamada "src" e um arquivo chamado "main.js" dentro dela

5- No arquivo "package.json" altere a linha do comando 

De --> `"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },`
  
Para --> `"scripts": {
    "test": "node ./src/main.js"
    },`
    
6- àra executar só aplicar o comando --> `npm test`

