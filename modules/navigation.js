const pageNavigation = () => {
  const homePage = document.getElementById('home-page');
  const addPage = document.getElementById('add-page');
  const contactPage = document.getElementById('contact-page');

  const linksBtn = document.getElementById('list');
  const addNewBtn = document.getElementById('add-new');
  const contactBtn = document.getElementById('contact');

  linksBtn.addEventListener('click', () => {
    addPage.style.display = 'none';
    contactPage.style.display = 'none';
    homePage.style.display = 'block';

    linksBtn.classList.add('active');
    addNewBtn.classList.remove('active');
    contactBtn.classList.remove('active');
  });

  addNewBtn.addEventListener('click', () => {
    addPage.style.display = 'block';
    contactPage.style.display = 'none';
    homePage.style.display = 'none';

    addNewBtn.classList.add('active');
    linksBtn.classList.remove('active');
    contactBtn.classList.remove('active');
  });

  contactBtn.addEventListener('click', () => {
    addPage.style.display = 'none';
    contactPage.style.display = 'block';
    homePage.style.display = 'none';

    linksBtn.classList.remove('active');
    addNewBtn.classList.remove('active');
    contactBtn.classList.add('active');
  });

  window.addEventListener('DOMContentLoaded', () => {
    addPage.style.display = 'none';
    contactPage.style.display = 'none';
    homePage.style.display = 'block';
  });
};

export default pageNavigation;