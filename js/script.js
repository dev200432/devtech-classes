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

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();

    const email = form.querySelector('input[type="email"]').value.trim();

    const message = form.querySelector("textarea").value.trim();

    if(name==="" || email==="" || message===""){

        alert("Please fill all fields.");

        return;

    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email.");

        return;

    }

    alert("Message Sent Successfully!");

    form.reset();

});

}

// Scroll To Top

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}