/*==================================================
GAYE GÜNGÖR PORTFOLIO V3
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
    ELEMENTS
    ==================================================*/

    const header = document.querySelector("header");
    const cursor = document.querySelector(".cursor");

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    const progressBar = document.querySelector(".progress-bar");



    /*==================================================
    CUSTOM CURSOR
    ==================================================*/

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });



    const hoverElements = document.querySelectorAll(

        "a, button, .project-item, .button-dark, .button-light"

    );



    hoverElements.forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("active");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("active");

        });

    });



    /*==================================================
    HEADER
    ==================================================*/

    function updateHeader() {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);



    /*==================================================
    SCROLL REVEAL
    ==================================================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.18

    });

    sections.forEach(section => {

        observer.observe(section);

    });



    /*==================================================
    ACTIVE MENU
    ==================================================*/

    function updateMenu() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 180;

            const height = section.offsetHeight;

            if (

                window.scrollY >= top &&
                window.scrollY < top + height

            ) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    updateMenu();

    window.addEventListener("scroll", updateMenu);



    /*==================================================
    SMOOTH NAVIGATION
    ==================================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const target = document.querySelector(

                link.getAttribute("href")

            );

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });



    /*==================================================
    SCROLL PROGRESS
    ==================================================*/

    window.addEventListener("scroll", () => {

        const totalHeight =

            document.documentElement.scrollHeight -

            window.innerHeight;

        const progress =

            (window.scrollY / totalHeight) * 100;

        if (progressBar) {

            progressBar.style.width = progress + "%";

        }

    });

});
    /*==================================================
    HERO PARALLAX
    ==================================================*/

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        const y = window.scrollY;

        hero.style.transform = `translateY(${y * 0.08}px)`;

    });



    /*==================================================
    BUTTON RIPPLE EFFECT
    ==================================================*/

    const buttons = document.querySelectorAll(".button-dark, .button-light");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-6px) scale(1.02)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });



    /*==================================================
    PROJECT HOVER EFFECT
    ==================================================*/

    const projects = document.querySelectorAll(".project-item");

    projects.forEach(project => {

        project.addEventListener("mouseenter", () => {

            project.style.transform = "translateX(18px)";

        });

        project.addEventListener("mouseleave", () => {

            project.style.transform = "translateX(0px)";

        });

    });



    /*==================================================
    HERO IMAGE EFFECT
    ==================================================*/

    const heroFrame = document.querySelector(".hero-frame");

    if(heroFrame){

        heroFrame.addEventListener("mousemove",(e)=>{

            const rect = heroFrame.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = (x / rect.width - .5) * 10;

            const rotateX = (.5 - y / rect.height) * 10;

            heroFrame.style.transform =

                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

        heroFrame.addEventListener("mouseleave",()=>{

            heroFrame.style.transform="";

        });

    }



    /*==================================================
    NAV LINK HOVER
    ==================================================*/

    navLinks.forEach(link=>{

        link.addEventListener("mouseenter",()=>{

            navLinks.forEach(item=>{

                if(item!==link){

                    item.style.opacity=".35";

                }

            });

        });

        link.addEventListener("mouseleave",()=>{

            navLinks.forEach(item=>{

                item.style.opacity="1";

            });

        });

    });



    /*==================================================
    PAGE TITLE ANIMATION
    ==================================================*/

    const heroTitle=document.querySelector(".hero h1");

    if(heroTitle){

        heroTitle.animate([

            {

                opacity:0,

                transform:"translateY(40px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],{

            duration:1200,

            easing:"ease",

            fill:"forwards"

        });

    }
    /*==================================================
    BACK TO TOP BUTTON
    ==================================================*/

    const backToTop = document.createElement("button");

    backToTop.className = "back-to-top";

    backToTop.innerHTML = "↑";

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {

        if(window.scrollY > 700){

            backToTop.classList.add("show");

        }else{

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });



    /*==================================================
    HERO PARALLAX
    ==================================================*/

    document.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5)*20;

        const y=(e.clientY/window.innerHeight-.5)*20;

        if(heroFrame){

            heroFrame.style.boxShadow=

            `${-x}px ${y}px 70px rgba(0,0,0,.55)`;

        }

    });



    /*==================================================
    PROJECT STAGGER ANIMATION
    ==================================================*/

    projects.forEach((project,index)=>{

        project.style.transitionDelay=`${index*60}ms`;

    });



    /*==================================================
    FADE ON LOAD
    ==================================================*/

    window.addEventListener("load",()=>{

        document.body.classList.add("loaded");

    });



    /*==================================================
    KEYBOARD ACCESSIBILITY
    ==================================================*/

    document.addEventListener("keyup",(e)=>{

        if(e.key==="Home"){

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    });



    /*==================================================
    RESIZE FIX
    ==================================================*/

    window.addEventListener("resize",()=>{

        updateHeader();

        updateMenu();

    });



    /*==================================================
    CONSOLE SIGNATURE
    ==================================================*/

    console.log(
"%cGaye Güngör Portfolio",
"font-size:18px;font-weight:bold;color:white;background:black;padding:8px 16px;border-radius:4px;"
);

    console.log(
"%cDesigned & Developed with HTML • CSS • JavaScript",
"color:#999;font-size:13px;"
);
    /*==================================================
    MAGNETIC BUTTON EFFECT
    ==================================================*/

    const magneticButtons = document.querySelectorAll(".button-dark, .button-light");

    magneticButtons.forEach(button => {

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform =
                `translate(${x * 0.12}px, ${y * 0.12}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });



    /*==================================================
    HERO IMAGE SCALE ON SCROLL
    ==================================================*/

    window.addEventListener("scroll", () => {

        if (!heroFrame) return;

        const scale = 1 + window.scrollY * 0.00015;

        heroFrame.style.scale = Math.min(scale, 1.08);

    });



    /*==================================================
    PROJECT FADE CASCADE
    ==================================================*/

    projects.forEach((item, index) => {

        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

        setTimeout(() => {

            item.style.transition = "all .8s ease";

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }, index * 120);

    });



    /*==================================================
    SECTION TITLE ANIMATION
    ==================================================*/

    const sectionTitles = document.querySelectorAll(".section-head h2");

    sectionTitles.forEach(title => {

        title.addEventListener("mouseenter", () => {

            title.style.letterSpacing = "3px";

        });

        title.addEventListener("mouseleave", () => {

            title.style.letterSpacing = "";

        });

    });



    /*==================================================
    PRELOAD HERO IMAGE
    ==================================================*/

    const heroImage = document.querySelector(".hero-frame img");

    if(heroImage){

        const preload = new Image();

        preload.src = heroImage.src;

    }



    /*==================================================
    DISABLE RIGHT CLICK ON HERO IMAGE (OPTIONAL)
    ==================================================*/

    if(heroImage){

        heroImage.addEventListener("contextmenu", (e)=>{

            e.preventDefault();

        });

    }
