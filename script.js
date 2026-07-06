// ===============================
// Typing Text Effect
// ===============================

const texts = [
    "BCA Student",
"Aspiring Full Stack Developer",
"Frontend Web Developer",
"Web Development Enthusiast"
];

let index = 0;

const typing = document.getElementById("typing");

function changeText() {
    typing.textContent = texts[index];

    index++;

    if (index >= texts.length) {
        index = 0;
    }
}

changeText();

setInterval(changeText, 2000);


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});