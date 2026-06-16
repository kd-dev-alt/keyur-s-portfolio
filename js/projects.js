const menuToggle = document.getElementById("menu-toggle");
const navA = document.getElementById("nav-a");
const topBtn = document.getElementById("top-btn");

const revealItems = document.querySelectorAll(
  ".reveal, .left-reveal, .right-reveal"
);

function revealProjects() {
  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealProjects);
window.addEventListener("load", revealProjects);

revealProjects();


if (topBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}


menuToggle.addEventListener("click", () => {
  navA.classList.toggle("active");

  if (navA.classList.contains("active")) {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
});

document.querySelectorAll(".nav-a a").forEach((link) => {
  link.addEventListener("click", () => {
    navA.classList.remove("active");
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  });
});