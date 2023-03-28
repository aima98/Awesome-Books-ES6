import Storage from './storage.js';

export default class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBookToList(book) {
    const list = document.querySelector('#books-list');

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-div');
    bookDiv.innerHTML = `<p class="author-name">"${book.title}" by ${book.author}</p>
      <button class="rmv-btn" id="data-id">Remove</button>
    `;
    list.appendChild(bookDiv);
  }

  static deleteBook(element) {
    if (element.classList.contains('rmv-btn')) {
      element.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static displayBooks() {
    const books = Storage.getFromStorage();
    books.forEach((book) => Books.addBookToList(book));
  }
}