const navBtn = document.querySelector('.nav-btn');
const header = document.querySelector('.header');
const searchBtn  = document.querySelector('.js-search-btn');

navBtn.addEventListener('click', () => {
    header.classList.toggle('active');
});