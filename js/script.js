let ham = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu');

ham.addEventListener('click', () => {
    if (ham.classList == 'hamburger') {
        ham.classList.add('hamburger_active');
        menu.classList.add('menu_active');
    } else { 
        ham.classList.remove('hamburger_active');
        menu.classList.remove('menu_active');
    }
});