var circleAreaES5 = function circleArea(r){
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};

console.log(circleAreaES5(2));

//simplificando a sintaxe do código anterior:

const circleArea = r => { //não precisa do function
    const PI = 3.14;
    const area =  PI * r * r;
    return area;
};
console.log(circleArea(2));
// muito parecido com função lambda do C#

//se a função possuir uma única instrução, pode-se usar sem chaves e return:

const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2));

//se não receber argumentos, utiliza-se parênteses vazios

const ola = () => console.log('hello!');
ola();