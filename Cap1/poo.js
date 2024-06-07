//Objetos JavaScript são coleções bem simples de pares nome-valor.

//duas maneiras de criar um objeto:

var obj = new Object();

//segunda

var obj = {};

//criar de maneira completa

obj = {
    nome : {
        primeiroNome: 'Gandalf',
        ultimo: 'O cinza'
    },
    endereco: 'Terra Média'
};

//Como podemos ver, para declarar um objeto JavaScript, pares
// [chave, valor] são usados, no quais a chave pode ser considerada
// um atributo do objeto, e o valor é o valor da propriedade.

//Declarar uma classe (construtor) que representa um livro:

function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

// Para instanciar essa classe:

var book = new Book ('O hobbit', 598, "01010101231");

//acessar e atualizar propriedades

console.log(book.title);
book.title = '1968';
console.log(book.title);

//declarar função/método

Book.prototype.imprimeTitulo = function(){
    console.log(this.title);
}; // No exemplo com prototype, a função printTitle será compartilhada entre todas as instâncias, e somente uma cópia será criada.

book.imprimeTitulo();

//Pode ser declarado a função diretamente na definição da classe

function Livro(titulo, paginas, cod){
    this.titulo = titulo;
    this.paginas = paginas;
    this.cod = cod;
    this.imprimeCodigo = function(){
        console.log(this.cod);
    };
};
//quando usamos uma definição baseada em classe, como no exemplo anterior, cada instância terá a sua própria cópia das funções.

var livro = new Livro('Hobbit', 600, '0812751');

    console.log('\n\nClasse definida com método embutido:')
    livro.imprimeCodigo();

    