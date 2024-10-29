const hamburger = document.querySelector('.hamburger i');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
    } else {
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
    }
});


menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        menu.classList.remove('active');
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
    }
});