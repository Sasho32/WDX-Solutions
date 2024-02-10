const currentYear = new Date().getFullYear();
const copyrightParagraph = document.querySelector('footer > #copyright > span');

copyrightParagraph.textContent = copyrightParagraph.textContent.replace(
    'year',
    currentYear
);
