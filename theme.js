const suns = Array.from(document.querySelectorAll('.fa-sun'));
const moons = Array.from(document.querySelectorAll('.fa-moon'));

suns.forEach(sun => {
    sun.addEventListener('click', () => {
        document.body.classList.remove('dark-theme');
    });
});

moons.forEach(moon => {
    moon.addEventListener('click', () => {
        document.body.classList.add('dark-theme');
    });
});
