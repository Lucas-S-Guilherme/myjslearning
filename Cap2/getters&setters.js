//os atributos da classe em JS não são privados (encapsulamento)

class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let lotrChar = new Person('Frodo');
console.log(lotrChar.name);
lotrChar.name = 'Gandalf';
console.log(lotrChar.name);
lotrChar._name = 'Sam'; // feito para demonstrar que o atributo não é privado
console.log(lotrChar.name);// comprova que o atributo foi acessado e alterado pela declaração anterior.