//--QUESTIONARIO---------------------------
// const leiaEntrada = require("readline");

// const lendo = leiaEntrada.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// lendo.question("Qual seu nome? ", function (answer) {
//   console.log(`Oh, seu nome é ${answer}`);
// });


// MEDIA DE 2 VALORES
// const prompt = require('prompt-sync')
// const prompt1 = prompt()

// var resultado;

// var n1 = parseInt(prompt1("Digite o primeiro valor: "));

// var n2 = parseInt(prompt1("Digite o segundo valor: "));

// resultado = (n1 + n2) / 2; 

// console.log("A média é igual a " + resultado);

//TABUADA----------------------------------------------
var resultado;

for(let conta =1; conta <= 10; conta++){

resultado =  conta * 2 ;
    console.log('Tabuada do 2 = ' + conta + ' * 2 =' + resultado )
}
