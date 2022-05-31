// Array
/* let array2 = ["string", 1 , true];
console.log(array); */

let array = ["string", 1 , true, 'palavra'];
console.log(array[0]);

array.forEach(function(item, index){console.log(item, index)});

array.push([]); //adiciona item no final
console.log(array);

array.pop([]); //retira item no final
console.log(array);

array.shift(); //retira item no inicio
console.log(array);

array.unshift("string"); //adiciona novo item no inicio
console.log(array);

console.log(array.indexOf(true)); //informa o indice do valor

array.splice(0 , 2); //remove ou substitui o itm pelo índice nformado
console.log(array);

let novoArray = array.slice(0, 3); //retorna uma parte de um array existente
console.log(novoArray);

//Object

let object = {string: "string", number: 1, Boolean: false, array: [array]};
console.log(object);

//Desestruturação
var string = object.string;
console.log(string);

var Booleaninterno = object.Boolean;
console.log(Booleaninterno);

var {string, number} = object;
console.log(string, number);