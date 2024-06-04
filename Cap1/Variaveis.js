// JS não é fortemente tipado.
var num = 1;
num = 35;
var price = 1.5;
var myName = 'Lucas';
var trueValue = true;
var nullVar = null; // nulo, sem valor
var und; //indefinido, nenhum valor

//Imprimir as variáveis

console.log('num: ' + num);
// O método console.log também aceita mais do que apenas argumentos. É possível utilizar vírgula (,) - o que permite adicionar uma descrição e visualizar o conteúdo da variável caso ela seja um objeto.
console.log('num: ', num); // executei direto no debug console

//Escopo das Variáveis - Global ou local

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction (){
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction(){
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);

//operadores