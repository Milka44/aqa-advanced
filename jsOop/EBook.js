const Book = require('./book');

class Ebook extends Book {
    static arrayOfEbooks(...ebooks){
        return ebooks;
    };
  //5.Створіть статичний метод для EBook який буде приймати як аргументи екземпляр 
  //класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook

  
    static arrayOfBooks(book, fileFormat){
        return new Ebook(book.bookTitle, book.bookAuthor, book.issuedDate, fileFormat);
    }

    constructor(bookTitle, bookAuthor, issuedDate, fileFormat) {
        super(bookTitle, bookAuthor, issuedDate);
        this.fileFormat = fileFormat;
    }
    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== 'string' || !value) {
            console.error(`Error: Enter correct file format for ${this.bookTitle}`);
            return;
        }
        this._fileFormat = value;
    }
    printInfo() {
        console.log(`This book is ${this.bookTitle}, written by ${this.bookAuthor} was published in ${this.issuedDate}. Format for download: ${this.fileFormat} `);
      }
    }

    module.exports = Ebook;