const Book = require("./book");
const Ebook = require("./EBook");

//Book
const book1 = new Book("1984", "George Orwell", 1949);
book1.printInfo();

const book2 = new Book("Great expectations", "Charles Dickens", 1861);
book2.printInfo();

const book3 = new Book("Fahrenheit 451", "Ray Bradbury", 1953);
book3.printInfo();

const book4 = new Book([], 0, 2020); // should throw Error
book4.printInfo();

const allBooksArray = Book.arrayOfBooks(book1, book2, book3, book4);

//Ebook

const ebook1 = new Ebook("1985", "George Orwell", 1950, ".pdf");
ebook1.printInfo();
const ebook2 = new Ebook("Fahrenheit 451", "Ray Bradbury", 1953, ".txt");
ebook2.printInfo();

const allEbooksArray = Ebook.arrayOfEbooks(ebook1, ebook2);

//4.Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання.
//Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)

const copiedArray = [...allBooksArray, ...allEbooksArray];

// searching book with the earliest date//accumulator=earliest
function getEarliestBook(array, field) {
	return array.reduce((earliest, current) => {
		return earliest[field] < current[field] ? earliest : current;
	});
}

const earliestBook = getEarliestBook(copiedArray, "_issuedDate");
console.log(earliestBook);

//5.Створіть статичний метод для EBook який буде приймати як аргументи екземпляр
//класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook

const ebookFromBook = Ebook.arrayOfBooks(book1, "csv");
ebookFromBook.printInfo();
