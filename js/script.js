// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Statistics Counter Animation

const counters = document.querySelectorAll(".counter");

const speed = 100;

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const update = () => {

            const increment = target / speed;

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count);

                setTimeout(update,20);

            }else{

                counter.innerText = target;

            }

        };

        update();

    });

};


// Counter starts when section becomes visible

const statsSection = document.querySelector(".stats");

let started = false;

window.addEventListener("scroll",()=>{

    if(statsSection){

        const top = statsSection.offsetTop - 400;

        if(window.scrollY > top && !started){

            startCounter();

            started = true;

        }

    }

});

// Contact Form Validation

const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", function(){

        alert("Sending Message...");

    });

}

// Scroll To Top Button

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }

});