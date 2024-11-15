const currentYear = new Date().getFullYear();
const copyrightParagraph = document.querySelector('footer > #copyright > span');

copyrightParagraph.textContent = copyrightParagraph.textContent.replace(
    /year|година/gi, // Match both 'year' and 'година' case-insensitively
    currentYear
);
