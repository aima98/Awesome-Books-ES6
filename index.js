import displayTime from './modules/displayDateTime.js';
import Books from './modules/book.js';
import Storage from './modules/storage.js';
import pageNavigation from './modules/navigation.js';

const container = document.getElementById('books-list');
const dateTimeContainer = document.querySelector('.date-time');

// Displaying Books
document.addEventListener('DOMContentLoaded', Books.displayBooks);
const allBooks = Storage.getFromStorage();
if (allBooks.length === 0) {
  container.innerHTML = '<p class="no-books">No books are available!</p>';
}

// Adding a book
const formBook = document.querySelector('.form-container');
formBook.addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Getting form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Initialising a book
  const newBook = new Books(title, author);

  // Adding book to Storage
  Storage.addBook(newBook);

  // Adding book to Books
  Books.addBookToList(newBook);

  // Clearing Fields
  Books.clearFields();
});

// Setting date and time
const setRealTime = () => {
  dateTimeContainer.innerHTML = displayTime();
};

setRealTime();
setInterval(setRealTime, 1000);

// Removing a book
document.querySelector('#books-list').addEventListener('click', (e) => {
  e.preventDefault();

  // Removing book from Books
  Books.deleteBook(e.target);

  // Removing book from Storage
  Storage.removeBook(e.target.previousElementSibling.previousElementSibling);
});

pageNavigation();