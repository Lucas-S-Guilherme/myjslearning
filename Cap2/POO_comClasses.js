
// Vimos que podemos declarar uma classe chamada Book na
// seção sobre programação orientada a objetos, desta maneira:
// function Book(title, pages, isbn) { 
// this.title = title;
// this.pages = pages;
// this.isbn = isbn;
// }
// Book.prototype.printTitle = function() {
// console.log(this.title);
// };

//simplificação da sintaxe de declaração de classes na ES2015:

class Book {
    constructor(title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printisbn(){
        console.log(this.isbn);
    }
}

let book = new Book('titulo', 'pagina', '012314123');
console.log(book.title);
book.title = 'new title';
console.log(book.title);

class ITBook extends Book {
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn);// super - palavra reservada para referenciar constructor de superclasse
        this.technology = technology;
    }
    printTechnology(){
        console.log(this.technology);
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'Javascript');
console.log(jsBook.title);
jsBook.printTechnology();

//console.log(jsBook.printTechnology()); // desse modo, no exemplo do livro, retorna undefined no final, porque imprime a função que já tem console.log.

