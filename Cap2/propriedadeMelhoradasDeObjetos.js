// uma maneira de inicializar variáveis de uma só vez
//Desestruturação de array

let [x, y] = ['a', 'b']; // o mesmo que let x = 'a'; let y ='b';

//também pode ser utilizada para fazer swap, sem a necessidade de criar variáveis temp

[x, y] = [y, x];

// código anterior é o mesmo que:
// var temp = x;
// x = y;
// y = temp;

//abreviação de propriedades

let [w, z] = ['a', 'b'];
let obj = {w, z};
console.log(obj);

//seria o mesmo que escrever: 
// var x ='a';
// var y = 'b';
// var obj2 = {x: x, y: y};
// console.log(obj2);

//Nomes de método abreviados. Permite que se declare função dentro de objetos, como se fossem propriedades.

const hello = {
    name:'lucas',
    printHello(){
        console.log('Hello');
    }
};

console.log(hello.printHello());
