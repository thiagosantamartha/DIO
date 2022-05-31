//funções declarativas
function funcao () {
    console.log('Tudo certo jovem!');
}

funcao ()

//expressão de função
// com nomeação
var função = function funcao0 () {
    console.log ('Sou uma msg de função de expressão');
}

função ()

var função1 = function  () {
    console.log ('Sou uma msg de função de expressão sem nomeação');
}

função1 ()

//arrow function = funções de expressão de sintaxe curta
var funcao3 = () => {
    console.log ('Sou uma arrow function');
} 

funcao3	()