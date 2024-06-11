//operador de espalhamento (spread operator) representado por ...

function sum (x = 1, y = 2, z =3){
    return x + y + z;
}

let params = [3, 4, 5];
console.log(sum(...params));

// O código anterior é igual a este código escrito em ES5:
// console.log(sum.apply(undefined, params));

// O operador de espelhamento (...) também pode ser usado como um parâmetro rest em funções para substituir arguments.

function restParameterFunction(x, y, ...a){
    return (x + y) * a.length;
};

console.log('Operador de espalhamento como parâmetro rest: ' + restParameterFunction(1, 2, 'hello', true, 7));

// O código anterior é igual ao código a seguir (também exibe 9 no console):
//     function restParamaterFunction(x, y) {
//     var a = Array.prototype.slice.call(arguments, 2);
//     return (x + y) * a.length;
//     }
// console.log(restParamaterFunction(1, 2, 'hello', true, 7));

