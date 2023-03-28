export default class Storage {
  static getFromStorage() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Storage.getFromStorage();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  // static removeBook(index) {
  //   const books = Storage.getFromStorage();

  //   books.forEach((book, index) => {
  //     if (book.title === title) {
  //       books.splice(index, 1);
  //     }
  //   });
  //   localStorage.setItem('books', JSON.stringify(books));
  // }
}