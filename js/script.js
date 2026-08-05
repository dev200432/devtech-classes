// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href !== "#") {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }

    });

});


// ===============================
// Statistics Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");
const speed = 100;

function startCounter() {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        let count = 0;

        function updateCounter() {

            const increment = target / speed;

            if (count < target) {

                count += increment;

                counter.innerText = Math.ceil(count);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        }

        updateCounter();

    });

}

const statsSection = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", () => {

    if (statsSection && !started) {

        const top = statsSection.offsetTop - 400;

        if (window.scrollY > top) {

            startCounter();
            started = true;

        }

    }

});


// ===============================
// Contact Form
// ===============================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function () {

        alert("Sending Message...");

        // FormSubmit ko form submit karne do
        // preventDefault nahi lagana

    });

}


// ===============================
// Scroll To Top Button
// ===============================

const scrollBtn = document.querySelector(".scroll-top");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            scrollBtn.style.display = "flex";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


// ===============================
// AOS Animation
// ===============================

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,
        once: true

    });

}