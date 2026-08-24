// =============================
// MOBILE MENU
// =============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

    menuBtn.textContent = "☰";

  });

});


// =============================
// SCROLL ANIMATIONS
// =============================

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


document.querySelectorAll(".reveal").forEach(element => {

  observer.observe(element);

});


// =============================
// CURRENT YEAR
// =============================

document.getElementById("year").textContent =
  new Date().getFullYear();