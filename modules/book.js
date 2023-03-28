export default class Books {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];

    this.addBook = () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      if (title && author) {
        this.books.push({ title, author });
        localStorage.setItem('books', JSON.stringify(this.books));
        this.displayBooks();
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
      }
    };

    this.removeBook = (index) => {
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
    };
  }

  displayBooks() {
    const bookList = document.getElementById('books-list');
    bookList.innerHTML = '';
    this.books.forEach((book, index) => {
      const bookDiv = document.createElement('div');
      const p = document.createElement('p');
      const removeButton = document.createElement('button');
      bookDiv.classList.add('book-div');
      p.textContent = `${book.title} by ${book.author}`;
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => this.removeBook(index));
      bookDiv.appendChild(p);
      bookDiv.appendChild(removeButton);
      bookList.appendChild(bookDiv);
    });
  }
} 