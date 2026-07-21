/* ======================================================
   GAYE GÜNGÖR PORTFOLIO
   Version 2.0
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ELEMENTS
    ========================================== */

    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");



    /* ==========================================
       STICKY HEADER
    ========================================== */

    function updateHeader(){

        if(window.scrollY > 60){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);



    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    sections.forEach(section=>{

        observer.observe(section);

    });



    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    function activeMenu(){

        let current = "";

        sections.forEach(section=>{

            const top = section.offsetTop - 150;

            const height = section.offsetHeight;

            if(window.scrollY >= top &&
               window.scrollY < top + height){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    }

    activeMenu();

    window.addEventListener("scroll", activeMenu);



    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    navLinks.forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const target = document.querySelector(

                link.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});
/* ======================================================
   HERO PARALLAX
====================================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const offset = window.scrollY;

    hero.style.backgroundPositionY = `${offset * 0.25}px`;

});



/* ======================================================
   PROJECT HOVER
====================================================== */

const projects = document.querySelectorAll(".project");

projects.forEach(project=>{

    project.addEventListener("mouseenter",()=>{

        project.style.transform="translateX(12px)";

    });

    project.addEventListener("mouseleave",()=>{

        project.style.transform="translateX(0px)";

    });

});



/* ======================================================
   SCROLL PROGRESS BAR
====================================================== */

const progress = document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

    const progressHeight=(window.scrollY/totalHeight)*100;

    progress.style.width=progressHeight+"%";

});



/* ======================================================
   BACK TO TOP
====================================================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>700){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/* ======================================================
   HERO FADE
====================================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});



/* ======================================================
   RANDOM LETTER SPACING
====================================================== */

const titles=document.querySelectorAll(".project-content h3");

titles.forEach(title=>{

    title.addEventListener("mouseenter",()=>{

        title.style.letterSpacing="3px";

    });

    title.addEventListener("mouseleave",()=>{

        title.style.letterSpacing="0px";

    });

});
