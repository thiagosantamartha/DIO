// Estrutras condicionais
var jogador1 = 0;
var jogador2 = 1;
var placar;

//ternário
jogador1 != -1 || jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Os jogadores são inválidos');

//usando if
    if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
    } 
    //usando else if
    else if (jogador2 > 0 && jogador1 == 0) { 
        console.log('Jogador 2 marcou ponto!');
        placar = jogador2 > jogador1;
    } 
    //usando else 
    else {
        console.log('ninguem marcou ponto!');
    }

//switch
    switch (placar) {
        case placar = jogador1 > jogador2:
            console.log('Jogador 1 ganhou!');
            break;
            case placar = jogador2 > jogador1:
                console.log('Jogador 2 ganhou!');
                break;
                default:
                console.log('Ninguém ganhou!');
    }

    //Estrutura de repetição

    let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
    let object = {propriedade1: 'valor1',propriedade2: 'valor2',propriedade3: 'valor3'};

    //for = executa uma instrução até que ela seja falsa
    for (let indice = 0; indice < array.length; indice++) {
        console.log(indice);
    }

    //for in = executa uma repetição a partir de uma propriedade
    // com array
    for (let i in array) {
        console.log(i);
    }

    //for in = executa uma repetição a partir de uma propriedade
    // com object
    for (i in object) {
        console.log(i);
    }

    //for of = executa uma repetição a partir de um valor
    //com array
    for (i of array) {
        console.log(i);
    }

    //for of = executa uma repetição a partir de um valor
    //com object  (não dá para utilizar com objects)
    for (i of object.propriedade1) {
        console.log(i);
    }

//while = executa uma instrução enquanto uma condição é verdadeira
var a = 0

while(a < 10) {
    a++;
    console.log(a);
}

// do = executa uma instrução até que uma condição seja falsa
do {
    a++;
    console.log(a);
}  while (a < 10)
