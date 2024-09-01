// script.js
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            nav.classList.add('scrolled');
            section.classList.add('active');
        } else {
            nav.classList.remove('scrolled');
            section.classList.remove('active');
        }
    });
});

nav.addEventListener('mouseover', () => {
    nav.classList.add('active');
});

nav.addEventListener('mouseout', () => {
    nav.classList.remove('active');
});

sections.forEach((section) => {
    section.addEventListener('mouseover', () => {
        section.classList.add('hover');
    });

    section.addEventListener('mouseout', () => {
        section.classList.remove('hover');
    });
});
