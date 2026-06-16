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