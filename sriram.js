// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});


// Appointment Form

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const button = form.querySelector("button");

  button.textContent = "Appointment Requested ✓";
  button.style.background = "#159447";

  setTimeout(() => {
    form.reset();
    button.textContent = "Request Appointment →";
    button.style.background = "";
  }, 2500);

});


// Scroll animation

const cards = document.querySelectorAll(
  ".service-card, .doctor-profile, .contact-card"
);

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }

    });

  },
  {
    threshold: 0.15
  }
);


cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(25px)";
  card.style.transition = "opacity .6s ease, transform .6s ease";

  observer.observe(card);

});
