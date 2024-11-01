const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');
const carousel = document.querySelector('.movie-carousel');

let scrollAmount = 0;

rightBtn.addEventListener('click', () => {
    scrollAmount += carousel.clientWidth / 4;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
    scrollAmount -= carousel.clientWidth / 4;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});