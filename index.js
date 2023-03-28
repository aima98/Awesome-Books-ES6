import displayTime from './modules/displayDateTime.js';
import Books from './modules/book.js';
import pageNavigation from './modules/navigation.js';

const dateTimeContainer = document.querySelector('.date-time');

// Setting date and time
const setRealTime = () => {
  dateTimeContainer.innerHTML = displayTime();
};

setRealTime();
setInterval(setRealTime, 1000);

const bookCollect = new Books();
document.getElementById('add').addEventListener('click', bookCollect.addBook);
bookCollect.displayBooks();

pageNavigation();