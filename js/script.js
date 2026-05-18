let logo = document.getElementById("logo");
let primaryBtn = document.getElementById("primary-btn");
let secondaryBtn = document.getElementById("secondary-btn");
let hireBtn = document.getElementById("hire-btn");
let topBtn = document.getElementById("top-btn");
let menuToggle = document.getElementById("menu-toggle");
let typingText = document.getElementById("typing-text");

let navLinks = document.querySelector(".nav-a");
let filterBtns = document.querySelectorAll(".filter-btn");
let skillCards = document.querySelectorAll(".skill-card");
let sections = document.querySelectorAll("main");
let reveals = document.querySelectorAll(".reveal, .left-reveal, .right-reveal");
let projectCards = document.querySelectorAll(".card");


// Logo Clicked
logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Home View my Work Button
primaryBtn.addEventListener("click", () => {
    document.getElementById("project").scrollIntoView({
        behavior: "smooth"
    });
});

// Home Get in Touch Button
secondaryBtn.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

// About Hire Button
hireBtn.addEventListener("click", () => {
    alert("Thank You for Hire Me!");
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

// Filter Button in Skill Section
filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((item) => {
            item.classList.remove("active");
        });
        btn.classList.add("active");

        let filterValue = btn.getAttribute("data-filter");

        skillCards.forEach((card) => {
            if (filterValue === "all") {
                card.style.display = "flex";
            } else if (card.classList.contains(filterValue)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Top Button
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
});

// Section Reveal 
function revealSection() {
    reveals.forEach((section) => {
        let windowHeight = window.innerHeight;
        let revealTop = section.getBoundingClientRect().top;
        let revealBottom = section.getBoundingClientRect().bottom;
        let revealPoint = 120;

        if (revealTop < windowHeight - revealPoint && revealBottom > revealPoint) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);


// Text Typing Animation
let words = [
    "Keyur Dobariya.",
    "Frontend Developer.",
    "Web Developer."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
    }

    let speed = isDeleting ? 60 : 100;
    setTimeout(typeEffect, speed);
}
typeEffect();

projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        // Mobile only
        if (window.innerWidth <= 768) {
            projectCards.forEach((item) => {
                if (item !== card) {
                    item.classList.remove("show-icons");
                }
            });
            card.classList.toggle("show-icons");
        }
    });
});
