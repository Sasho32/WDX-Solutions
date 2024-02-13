// Get the button:
let topBtn = document.getElementById('go-to-the-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

// topBtn.style.display = 'none';

function scrollFunction() {
    if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
    ) {
        document.body.classList.add('show-top-btn');
    } else {
        document.body.classList.remove('show-top-btn');
    }
}

scrollFunction();

// -----------------------------------------------------------------------

window.addEventListener('scroll', manageSideSocials);

function manageSideSocials() {
    const socialIcons = document.querySelector('section#hero');

    // Get the bounding rectangle of the section
    const rect = socialIcons.getBoundingClientRect();

    // Check if the section is visible in the viewport
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    // Add or remove class based on visibility
    if (isVisible) {
        document.body.classList.remove('show-side-socials');
    } else {
        document.body.classList.add('show-side-socials');
    }
}

manageSideSocials();
