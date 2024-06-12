class Book {
	static arrayOfBooks(...books) {
		return books;
	}

	constructor(bookTitle, bookAuthor, issuedDate) {
		this.bookTitle = bookTitle;
		this.bookAuthor = bookAuthor;
		this.issuedDate = issuedDate;
	}

	get bookTitle() {
		return this._bookTitle;
	}

	set bookTitle(value) {
		if (typeof value !== "string" || !value) {
			console.error("Error: Enter correct book name.");
			return;
		}
		this._bookTitle = value;
	}

	get bookAuthor() {
		return this._bookAuthor;
	}

	set bookAuthor(value) {
		if (typeof value !== "string" || !value) {
			console.error("Error: Enter correct author name.");
			return;
		}
		this._bookAuthor = value;
	}
	get issuedDate() {
		return this._issuedDate;
	}

	set issuedDate(value) {
		if (typeof value !== "number" || value > 2024) {
			console.error("Error: Date of issue can not be more than 2024.");
			return;
		}
		this._issuedDate = value;
	}

	printInfo() {
		console.log(`This book is ${this.bookTitle}, written by ${this.bookAuthor}, was published in ${this.issuedDate}`);
	}
}

module.exports = Book;
