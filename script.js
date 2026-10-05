/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );

        contactForm.reset();

    });

}


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .achievement-card"
);


const revealOnScroll = () => {

    const windowHeight = window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});
