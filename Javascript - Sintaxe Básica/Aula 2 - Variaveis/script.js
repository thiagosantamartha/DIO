//tipos primitivos

//boolean
var VOuF = false;
console.log(typeof(VOuF));

//nunmber
var numeroqualquer = 1;
console.log(typeof(numeroqualquer));

//string
var nome = 'Thiago';
console.log(typeof(nome));

//como declarar
var variavel = 'thiago';
variavel = 'thais';
console.log(variavel);

let variavel2 = 'thiago';
console.log(variavel2);

const constante1 = 'bel';
console.log(constante1);

//escopo
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopolocal () {
    let escopolocalinterno = 'local';
    console.log(escopolocalinterno);
}

escopolocal();

//atribuição
var atribuicao = "nome";
console.log(atribuicao);

//comparação
var comparação = '0' == 0;
console.log(comparação);

var comparaçãoAutentica = '0' === 0;
console.log(comparaçãoAutentica);

var adicao = 1 + 2;
console.log(adicao);

var subtracao = 2 - 1;
console.log(subtracao);

var multiplicacao = 2 * 2;
console.log(multiplicacao);

var divisaoReal = 4 / 2;
console.log(divisaoReal);

var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

var potenciacao = 2 ** 10;
console.log(potenciacao);

//Operadores relacionais
var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 5 < 2;
console.log(menorQue);

var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//Operadores lógicos
var e = true && false
console.log(e);

var ou = true || false
console.log(ou);

var nao = ! true 
console.log(nao);

