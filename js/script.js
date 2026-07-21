// ===========================
// NAVBAR SCROLL
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


// ===========================
// SCROLL REVEAL
// ===========================

const sections = document.querySelectorAll(".section, .focus, .featured-projects");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.classList.add("show");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    observer.observe(section);

});


// ===========================
// SMOOTH ACTIVE MENU
// ===========================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    document.querySelectorAll("section").forEach(section=>{

        const top = section.offsetTop - 120;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ===========================
// HERO PARALLAX
// ===========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    hero.style.backgroundPosition = `center ${y * 0.25}px`;

});


// ===========================
// PROJECT HOVER
// ===========================

document.querySelectorAll(".project-row").forEach(project=>{

    project.addEventListener("mouseenter",()=>{

        project.style.transform="translateX(12px)";

    });

    project.addEventListener("mouseleave",()=>{

        project.style.transform="translateX(0px)";

    });

});
