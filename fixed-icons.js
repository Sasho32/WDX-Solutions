// Get the button:
let topBtn = document.getElementById('go-to-the-top');

topBtn.addEventListener('click', topFunction);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

topBtn.style.display = 'none';

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener('scroll', function () {
    const socialIcons = document.querySelector('section#social-media-icons');

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
});
