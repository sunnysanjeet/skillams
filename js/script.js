// Function to Load Components
function loadComponent(containerId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load Navbar, Footer, and WhatsApp
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar-container", "navbar.html");
    loadComponent("footer-container", "footer.html");
    loadComponent("whatsapp-container", "whatsapp.html");
}); 


// Navbar Section
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});


// Testimonials Arrows
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }
   
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);


// FAQs Section
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const faqItem = button.parentElement;
       
        // Close all other FAQs before opening the clicked one
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== faqItem) {
                item.classList.remove("active");
                item.querySelector(".faq-answer").style.display = "none";
            }
        });

        const answer = faqItem.querySelector(".faq-answer");
        if (faqItem.classList.contains("active")) {
            faqItem.classList.remove("active");
            answer.style.display = "none";
        } else {
            faqItem.classList.add("active");
            answer.style.display = "block";
        }
    });
});


// Navbar for mobile
function toggleMenu() {
    let mobileMenu = document.getElementById("mobileMenu");
    let hamburger = document.getElementById("hamburger");

    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
}

function toggleDropdown(id) {
    let dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    dropdown.previousElementSibling.classList.toggle("active");
}


// contact submit query button after msg and reset form 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission (since it's frontend only)
        successMessage.style.display = "block"; // Show success message
        setTimeout(() => {
            successMessage.style.display = "none"; // Hide after 3 seconds
        }, 3000);
        form.reset(); // Reset the form fields
    });
});