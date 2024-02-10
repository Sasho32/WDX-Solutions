const menuOpener = document.querySelector('#menu-opener');
const menuCloser = document.querySelector('#menu-closer');

menuOpener.addEventListener('click', openMenu);
menuCloser.addEventListener('click', closeMenu);

const menuLinks = Array.from(document.querySelectorAll('nav .closer'));

menuLinks.forEach(link => link.addEventListener('click', closeMenu));

function openMenu() {
    document.body.classList.add('menu-opened');
    document.body.classList.remove('menu-closed');
}

function closeMenu() {
    document.body.classList.remove('menu-opened');
    document.body.classList.add('menu-closed');
}
