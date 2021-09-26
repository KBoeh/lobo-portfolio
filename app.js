const hamburger = document.querySelectorAll(".hamB, .nav-links li");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const email = document.querySelectorAll(".fa-envelope, .fa-times-circle");
const eContainer = document.querySelector(".email-container");

// toggle for ham button and fade effect for links within drop-down menu
// activates the listener when a link is clicked within the dropdown menu
hamburger.forEach((hamburger) => {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    });
});

//toggle for the envelope-icon and the x-icon (to open/close the email pop-up)
email.forEach((email) => {
    email.addEventListener("click", () => {
        eContainer.classList.toggle("eToggle");

    })
})


// const navToggle = document.querySelector('.nav__toggle');

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

const navToggle = document.querySelector('.hamB');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('open');
});





