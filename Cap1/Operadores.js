// bit a bit (bitwise)

//Operador que devolve tipo da variável ou expressão.
var testes = 'teste';
console.log(testes);

console.log('O tipo da variável testes é :', typeof testes);

//Operador delete
var myObj = {name: 'John', age: 21};
console.log('Nome: ', myObj.name, "\nidade: ",myObj.age);
delete myObj.age;
console.log(myObj);

//True e false são complicados em JS

// switch case


const readline = require('readline'); //importa módulo readline do node.js, fornece uma interface para ler linhas (como o terminal)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//cria uma interface rl usando o método createInterface() do módulo readline.
// Especificamos que a entrada (input) da interface será o process.stdin, que representa a entrada padrão do console.
// Especificamos que a saída (output) da interface será o process.stdout, que representa a saída padrão do console.

rl.question('Digite um número de mês (1 a 12): ', (entrada) => {

var month = 5;
switch (entrada){
    case 1:
        console.log('January');
        break;
    
    case 5:
        console.log('May')
        break;
    default:
        console.log('O mês não consta na lista.')
}

rl.close();

});

