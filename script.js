// ===============================
// Typing Animation
// ===============================

const textArray = ["DSA", "Java", "Python", "C Language", "C++"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (!typingElement) return;

    if (textIndex >= textArray.length) textIndex = 0;

    currentText = textArray[textIndex];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1000);
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ===============================
// Floating Particles Background
// ===============================

function createParticles() {
    for (let i = 0; i < 40; i++) {
        let particle = document.createElement("div");
        particle.className = "particle";
        document.body.appendChild(particle);

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (5 + Math.random() * 10) + "s";
        particle.style.opacity = Math.random();
        particle.style.width = particle.style.height = 
            Math.random() * 6 + 4 + "px";
    }
}

createParticles();


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll("section");

function revealOnScroll() {
    revealElements.forEach((section) => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


// ===============================
// Smooth Scroll for Anchor Links
// ===============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


// ===============================
// Button Hover Glow Effect
// ===============================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.boxShadow = "0 0 20px #38bdf8";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.boxShadow = "none";
    });
});


// ===============================
// Console Message
// ===============================

console.log("🔥 Shivam Portfolio Loaded Successfully!");