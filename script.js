document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuButton = document.querySelector(".menu-button");
    const closeButton = document.querySelector(".sidebar li:first-child"); // Close icon
    const menuLinks = document.querySelectorAll(".sidebar li a"); // All menu links

    function showSidebar() {
        sidebar.classList.add("active");
    }

    function hideSidebar() {
        sidebar.classList.remove("active");
    }

    // Show sidebar on menu button click
    menuButton.addEventListener("click", showSidebar);

    // Hide sidebar on close button click
    closeButton.addEventListener("click", hideSidebar);

    // Hide sidebar when clicking any menu link
    menuLinks.forEach(link => {
        link.addEventListener("click", hideSidebar);
    });
    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight * 0.8) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
});

// Get elements
const navbar = document.querySelector("nav");
const sidebar = document.querySelector(".sidebar");



// Make Navbar Transparent Initially




document.addEventListener("DOMContentLoaded", function () {
    const serviceBoxes = document.querySelectorAll(".service-box");

    function revealOnScroll() {
        serviceBoxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxTop < windowHeight - 50) {
                box.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on load in case elements are already in view
});

document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    function revealOnScroll() {
        portfolioItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight - 50) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

// Initialize
showTestimonial(index);

// Next Slide
nextBtn.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
});

// Previous Slide
prevBtn.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
});

document.addEventListener("DOMContentLoaded", function () {
    let backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetClass = this.getAttribute('href').substring(1);
        const targetElement = document.querySelector('.' + targetClass);

        if (targetElement) {
            const offset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    });
});

