const logo = document.getElementById("logo");
const primaryBtn = document.getElementById("primary-btn");
const secondaryBtn = document.getElementById("secondary-btn");
const topBtn = document.getElementById("top-btn");
const menuToggle = document.getElementById("menu-toggle");
const typingText = document.getElementById("typing-text");
const navA = document.getElementById("nav-a");

const navItems = document.querySelectorAll(".nav-a a");
const pageSections = document.querySelectorAll("main[id]");
const filterBtns = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");
const sections = document.querySelectorAll("main");
const reveals = document.querySelectorAll(
  ".reveal, .left-reveal, .right-reveal",
);
const projectCards = document.querySelectorAll(".card");

// Logo Clicked
logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Home View Projects Button
primaryBtn.addEventListener("click", () => {
  document.getElementById("project").scrollIntoView({
    behavior: "smooth",
  });
});

// Home Get in Touch Button
secondaryBtn.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});

// Filter Button in Skill Section
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((item) => {
      item.classList.remove("active");
    });
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

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
    behavior: "smooth",
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

/* Active Navbar Link on Scroll */
function activeNavLink() {
  let currentSection = "";
  pageSections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });
  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("scroll", activeNavLink);
window.addEventListener("load", activeNavLink);

// Section Reveal
function revealSection() {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealBottom = section.getBoundingClientRect().bottom;
    const revealPoint = 120;

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
const words = ["Keyur Dobariya.", "Frontend Developer.", "Web Developer."];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
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

  const speed = isDeleting ? 60 : 100;
  setTimeout(typeEffect, speed);
}
typeEffect();

menuToggle.addEventListener("click", () => {
  navA.classList.toggle("active");

  if (navA.classList.contains("active")) {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

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
