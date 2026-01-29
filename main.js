document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const currentPage = body.getAttribute("data-page");
  const navLinks = document.querySelectorAll(".nav-links a[data-nav]");

  // Highlight active nav link based on data-page
  if (currentPage && navLinks.length) {
    navLinks.forEach((link) => {
      if (link.dataset.nav === currentPage) {
        link.classList.add("active");
      }
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-links");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
      });
    });
  }

  // Set footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Simple client-side handling of the contact form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Basic validation highlighting
      const requiredFields = contactForm.querySelectorAll("[required]");
      let valid = true;
      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          field.classList.add("error");
          valid = false;
        } else {
          field.classList.remove("error");
        }
      });

      if (!valid) return;

      // Clear fields and show confirmation (no back-end submission)
      contactForm.reset();
      const success = document.getElementById("form-success");
      if (success) {
        success.hidden = false;
        setTimeout(() => {
          success.hidden = true;
        }, 4000);
      }
    });
  }
});

