function updateScrollPadding() {
    console.log(window.innerWidth);
    if (window.innerWidth < 1000) {
        console.log('kei');
        return;
    }

    const navigationHeight = document.querySelector('nav').offsetHeight;
    document.documentElement.style.setProperty(
        '--scroll-padding',
        navigationHeight + 'px'
    );

    console.log(navigationHeight + 'px');
}

// Initial call to set scroll padding on page load
updateScrollPadding();

// Event listener to update scroll padding on window resize
window.addEventListener('resize', updateScrollPadding);
// ----------------------------------------------------

const els = Array.from(
    document.querySelectorAll(
        '#profile-pic > img, section#social-media-icons > a.hidden'
    )
);

els.forEach(el => {
    el.classList.remove('hidden');
});

const hiddenElements = document.querySelectorAll(
    '.hidden:not(#profile-pic > img)'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            element.classList.remove('hidden');
            observer.unobserve(element); // Stop observing once the element is visible
        }
    });
});

hiddenElements.forEach(element => {
    observer.observe(element);
});

// ----------------------------------
